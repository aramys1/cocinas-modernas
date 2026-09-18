import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { contactProjectTypes } from '@/lib/contact';
import { siteUrl } from '@/lib/site-config';

export const runtime = 'nodejs';
const allowedProjects = new Set<string>(contactProjectTypes);
const maximumBytes = 20_000;
const invalidRequest = () =>
  NextResponse.json(
    { error: 'Los datos enviados no son válidos.' },
    { status: 400 },
  );
const cleanString = (value: unknown) =>
  typeof value === 'string' ? value.trim() : '';
const escapeHtml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

export async function POST(request: Request) {
  const origin = request.headers.get('origin');
  if (origin && ![new URL(request.url).origin, siteUrl].includes(origin)) {
    return NextResponse.json(
      { error: 'Origen no permitido.' },
      { status: 403 },
    );
  }
  if (
    request.headers.get('content-type')?.split(';')[0].trim().toLowerCase() !==
    'application/json'
  ) {
    return NextResponse.json(
      { error: 'Formato no compatible.' },
      { status: 415 },
    );
  }
  if (Number(request.headers.get('content-length')) > maximumBytes) {
    return NextResponse.json(
      { error: 'Solicitud demasiado grande.' },
      { status: 413 },
    );
  }

  // Bound the actual stream too; Content-Length is not always present.
  const reader = request.body?.getReader();
  if (!reader) return invalidRequest();
  let body: Record<string, unknown>;
  try {
    let size = 0;
    let text = '';
    const decoder = new TextDecoder();
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > maximumBytes) {
        await reader.cancel();
        return NextResponse.json(
          { error: 'Solicitud demasiado grande.' },
          { status: 413 },
        );
      }
      text += decoder.decode(value, { stream: true });
    }
    text += decoder.decode();
    const parsed: unknown = JSON.parse(text);
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed))
      return invalidRequest();
    body = parsed as Record<string, unknown>;
  } catch {
    return invalidRequest();
  } finally {
    reader.releaseLock();
  }

  const nombre = cleanString(body.nombre);
  const telefono = cleanString(body.telefono);
  const email = cleanString(body.email);
  const proyecto = cleanString(body.proyecto);
  const ubicacion = cleanString(body.ubicacion);
  const empresa = cleanString(body.empresa);
  const mensaje = cleanString(body.mensaje);
  if (cleanString(body.website)) return NextResponse.json({ success: true });
  const started = body.formStartedAt;
  if (
    typeof started !== 'number' ||
    !Number.isFinite(started) ||
    started <= 0 ||
    Date.now() - started < 2500
  )
    return invalidRequest();
  if (
    nombre.length < 2 ||
    nombre.length > 80 ||
    ubicacion.length < 2 ||
    ubicacion.length > 120 ||
    empresa.length > 120 ||
    mensaje.length < 10 ||
    mensaje.length > 2000 ||
    email.length > 120
  )
    return invalidRequest();
  const digits = telefono.replace(/\D/g, '');
  if (
    !/^[0-9+\s().-]{7,25}$/.test(telefono) ||
    digits.length < 7 ||
    digits.length > 15
  )
    return invalidRequest();
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return invalidRequest();
  if (!allowedProjects.has(proyecto)) return invalidRequest();

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL;
  const from =
    process.env.RESEND_FROM_EMAIL ||
    (process.env.NODE_ENV === 'development'
      ? 'Cotizaciones Web <onboarding@resend.dev>'
      : undefined);
  if (!apiKey || !to || !from) {
    console.error('Falta configurar el servicio de cotizaciones.');
    return NextResponse.json(
      {
        error:
          'El servicio de correo no está disponible. Contáctanos por WhatsApp.',
      },
      { status: 503 },
    );
  }
  const fields = [
    ['Nombre', nombre],
    ['Celular / WhatsApp', telefono],
    ['Correo', email || 'No proporcionado'],
    ['Tipo de proyecto', proyecto],
    ['Ubicación', ubicacion],
    ['Empresa / organización', empresa || 'No aplica'],
  ];
  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email || undefined,
      subject: `Nueva cotización - ${proyecto}`,
      text: `${fields.map(([label, value]) => `${label}: ${value}`).join('\n')}\n\nDetalles del proyecto:\n${mensaje}`,
      html: `<div style="max-width:650px;margin:auto;padding:32px;font-family:Arial,sans-serif;color:#171717"><h1>Nueva solicitud de cotización</h1><p>Formulario de Cocinas Modernas</p><table style="width:100%;border-collapse:collapse">${fields.map(([label, value]) => `<tr><th style="padding:10px;text-align:left">${label}</th><td style="padding:10px">${escapeHtml(value)}</td></tr>`).join('')}</table><h2>Detalles del proyecto</h2><p style="white-space:pre-wrap;line-height:1.6">${escapeHtml(mensaje)}</p></div>`,
    });
    if (error) {
      // Do not log message bodies, credentials or personal contact information.
      console.error('El proveedor de correo rechazó la cotización.');
      return NextResponse.json(
        { error: 'No se pudo enviar la cotización.' },
        { status: 502 },
      );
    }
    return NextResponse.json({ success: true });
  } catch {
    console.error('No se pudo conectar con el servicio de correo.');
    return NextResponse.json(
      { error: 'No se pudo enviar la cotización.' },
      { status: 502 },
    );
  }
}
