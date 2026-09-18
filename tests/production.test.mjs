import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import vm from 'node:vm';
import ts from 'typescript';

function load(relativePath, modules = {}, env = {}) {
  const source = readFileSync(
    new URL(`../${relativePath}`, import.meta.url),
    'utf8',
  );
  const compiled = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
      jsx: ts.JsxEmit.ReactJSX,
      esModuleInterop: true,
    },
  }).outputText;
  const context = {
    exports: {},
    require: (name) => {
      if (!Object.hasOwn(modules, name))
        throw new Error(`Unexpected module: ${name}`);
      return modules[name];
    },
    process: { env },
    URL,
    TextDecoder,
    console: { error() {} },
  };
  vm.runInNewContext(compiled, context, { filename: relativePath });
  return context.exports;
}

const contact = load('lib/contact.ts');
const sample = () => ({
  nombre: 'Persona de prueba',
  telefono: '+507 6000-0000',
  email: 'prueba@example.test',
  proyecto: 'Cocina residencial',
  ubicacion: 'Panamá Oeste',
  empresa: '',
  mensaje: 'Consulta de prueba del formulario.',
  website: '',
  formStartedAt: Date.now() - 5000,
});
function api({
  env = {
    NODE_ENV: 'production',
    RESEND_API_KEY: 'test-only',
    CONTACT_EMAIL: 'destino@example.test',
    RESEND_FROM_EMAIL: 'origen@example.test',
  },
  fail = false,
} = {}) {
  const sent = [];
  const handler = load(
    'app/api/cotizacion/route.ts',
    {
      'next/server': { NextResponse: { json: Response.json } },
      '@/lib/contact': contact,
      '@/lib/site-config': { siteUrl: 'https://example.test' },
      resend: {
        Resend: class {
          emails = {
            send: async (message) => {
              sent.push(message);
              return { error: fail ? { name: 'test_error' } : null };
            },
          };
        },
      },
    },
    env,
  ).POST;
  const post = (body, headers = {}) =>
    handler(
      new Request('https://example.test/api/cotizacion', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          origin: 'https://example.test',
          ...headers,
        },
        body: typeof body === 'string' ? body : JSON.stringify(body),
      }),
    );
  return { post, sent };
}

test('valid quote uses configured sender, recipient, reply-to and escaped HTML', async () => {
  const { post, sent } = api();
  const response = await post({
    ...sample(),
    nombre: '  A & B  ',
    mensaje: 'Medida propuesta: 2 < 3 metros.',
  });
  assert.equal(response.status, 200);
  assert.equal(sent.length, 1);
  assert.equal(sent[0].from, 'origen@example.test');
  assert.equal(sent[0].to, 'destino@example.test');
  assert.equal(sent[0].replyTo, 'prueba@example.test');
  assert.match(sent[0].html, /A &amp; B/);
  assert.match(sent[0].html, /2 &lt; 3/);
  assert.match(sent[0].text, /A & B/);
});

test('honeypot accepts silently without contacting provider', async () => {
  const { post, sent } = api();
  assert.equal((await post({ website: 'test' })).status, 200);
  assert.equal(sent.length, 0);
});

test('malformed JSON and non-object bodies return validation errors', async () => {
  const { post, sent } = api();
  for (const body of ['{', 'null', '[]'])
    assert.equal((await post(body)).status, 400);
  assert.equal(sent.length, 0);
});

test('invalid, empty or too-fast form data never sends email', async () => {
  const { post, sent } = api();
  for (const fields of [
    { nombre: '' },
    { telefono: '-------' },
    { email: 'incorrecto' },
    { proyecto: 'no disponible' },
    { formStartedAt: Date.now() },
    { formStartedAt: '0' },
    { mensaje: 'corto' },
  ]) {
    assert.equal((await post({ ...sample(), ...fields })).status, 400);
  }
  assert.equal(sent.length, 0);
});

test('request size is bounded even without Content-Length', async () => {
  const { post, sent } = api();
  assert.equal(
    (await post({ ...sample(), mensaje: 'a'.repeat(21000) })).status,
    413,
  );
  assert.equal(sent.length, 0);
});

test('wrong content type and unrelated origin are rejected', async () => {
  const { post, sent } = api();
  assert.equal(
    (await post(sample(), { 'content-type': 'text/plain' })).status,
    415,
  );
  assert.equal(
    (await post(sample(), { origin: 'https://other.example.test' })).status,
    403,
  );
  assert.equal(sent.length, 0);
});

test('production requires all private mail settings', async () => {
  for (const key of ['RESEND_API_KEY', 'CONTACT_EMAIL', 'RESEND_FROM_EMAIL']) {
    const env = {
      NODE_ENV: 'production',
      RESEND_API_KEY: 'test-only',
      CONTACT_EMAIL: 'destino@example.test',
      RESEND_FROM_EMAIL: 'origen@example.test',
      [key]: '',
    };
    const { post, sent } = api({ env });
    assert.equal((await post(sample())).status, 503);
    assert.equal(sent.length, 0);
  }
});

test('provider failures do not report false success or expose provider details', async () => {
  const { post } = api({ fail: true });
  const response = await post(sample());
  assert.equal(response.status, 502);
  assert.doesNotMatch(await response.text(), /test_error/);
});

test('preview has noindex policy, blocked robots and no advertised localhost sitemap', () => {
  const config = load('lib/site-config.ts');
  const robots = load('app/robots.ts', {
    '@/lib/site-config': config,
  }).default();
  const sitemap = load('app/sitemap.ts', {
    '@/lib/site-config': config,
  }).default();
  const metadata = load('lib/seo.ts', { './site-config': config }).pageMetadata(
    'Prueba',
    'Descripción',
    '/galeria',
  );
  assert.equal(config.isPublicSite, false);
  assert.equal(robots.rules.disallow, '/');
  assert.equal(sitemap.length, 0);
  assert.equal(metadata.robots.index, false);
});

test('configured domain generates all six canonical URLs, OG and sitemap', () => {
  const config = load(
    'lib/site-config.ts',
    {},
    { NEXT_PUBLIC_SITE_URL: 'https://example.test' },
  );
  const sitemap = load('app/sitemap.ts', {
    '@/lib/site-config': config,
  }).default();
  const metadata = load('lib/seo.ts', { './site-config': config }).pageMetadata(
    'Prueba',
    'Descripción',
    '/closets',
  );
  assert.equal(sitemap.length, 6);
  assert.ok(
    sitemap.every(({ url }) => url.startsWith('https://example.test/')),
  );
  assert.equal(metadata.alternates.canonical, 'https://example.test/closets');
  assert.equal(metadata.openGraph.url, 'https://example.test/closets');
  assert.equal(
    metadata.openGraph.images[0].url,
    'https://example.test/cocina-gris-hero.png',
  );
  assert.equal(metadata.robots.index, true);
});

test('site URL rejects paths and credentials', () => {
  for (const value of [
    'https://example.test/path',
    'https://user@example.test',
    'ftp://example.test',
  ])
    assert.throws(() =>
      load('lib/site-config.ts', {}, { NEXT_PUBLIC_SITE_URL: value }),
    );
});

test('gallery accepts existing links with accents and uses stable category slugs', () => {
  const data = load('data/projects.ts');
  assert.equal(data.parseCategory('Clósets'), 'closets');
  assert.equal(data.parseCategory('Centros de TV'), 'centros-de-tv');
  assert.equal(data.parseCategory('Baños'), 'todos');
  assert.equal(data.parseCategory(null), 'todos');
  assert.ok(
    data
      .serviceProjects('cocinas')
      .every(
        (project) =>
          project.category === 'cocinas' && project.published !== false,
      ),
  );
});
import React from 'react';
import * as jsx from 'react/jsx-runtime';
import { renderToStaticMarkup } from 'react-dom/server';

function lightbox(project) {
  const data = load('data/projects.ts');
  const config = load('lib/site-config.ts');
  const icon = () => React.createElement('span', { 'aria-hidden': true });
  const ImageLightbox = load('components/ImageLightbox.tsx', {
    react: React,
    'react/jsx-runtime': jsx,
    'next/image': ({ src, alt }) => React.createElement('img', { src, alt }),
    'lucide-react': Object.fromEntries(
      ['X', 'ChevronLeft', 'ChevronRight', 'ZoomIn', 'ZoomOut', 'Phone'].map(
        (name) => [name, icon],
      ),
    ),
    'react-icons/fa': { FaWhatsapp: icon },
    './Modal': ({ children }) => React.createElement('div', null, children),
    '@/data/projects': data,
    '@/lib/site-config': config,
  }).default;
  return renderToStaticMarkup(
    React.createElement(ImageLightbox, {
      projects: [project],
      currentIndex: 0,
      onClose() {},
      onChange() {},
    }),
  );
}
const baseProject = {
  id: 'test',
  title: 'Proyecto de prueba',
  category: 'cocinas',
  image: '/cocina-gris.png',
};

test('lightbox omits empty sections and falls back to title for alt text', () => {
  const html = lightbox(baseProject);
  assert.doesNotMatch(
    html,
    /Sobre el proyecto|Ubicación|Tipo de proyecto|Duración \/ instalación/,
  );
  assert.match(html, /alt="Proyecto de prueba"/);
  assert.match(html, /Cotizar un proyecto similar/);
});

test('lightbox renders supplied details without filling in missing fields', () => {
  const html = lightbox({
    ...baseProject,
    description: 'Descripción de prueba',
    location: 'Panamá Oeste',
    projectType: 'Tipo de prueba',
    duration: 'Duración de prueba',
    alt: 'Imagen de prueba',
  });
  for (const value of [
    'Sobre el proyecto',
    'Descripción de prueba',
    'Panamá Oeste',
    'Tipo de prueba',
    'Duración de prueba',
    'Imagen de prueba',
  ])
    assert.ok(html.includes(value));
  const partial = lightbox({ ...baseProject, location: 'Panamá Oeste' });
  assert.match(partial, /Ubicación/);
  assert.doesNotMatch(
    partial,
    /Tipo de proyecto|Duración \/ instalación|Sobre el proyecto/,
  );
});
