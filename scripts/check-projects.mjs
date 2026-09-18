import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';

// Use the existing TypeScript compiler: no extra runtime dependencies.
const source = fs.readFileSync('data/projects.ts', 'utf8');
const compiled = ts.transpileModule(source, {
  compilerOptions: {
    module: ts.ModuleKind.ESNext,
    target: ts.ScriptTarget.ES2022,
  },
}).outputText;
const { projects, projectCategories } = await import(
  `data:text/javascript;base64,${Buffer.from(compiled).toString('base64')}`
);
const ids = new Set();
const root = path.resolve('public');
for (const project of projects) {
  if (!project.id || ids.has(project.id))
    throw new Error(`ID vacío o duplicado: ${project.id}`);
  ids.add(project.id);
  if (!project.title?.trim() || !project.alt?.trim())
    throw new Error(`Falta title o alt: ${project.id}`);
  if (!Object.hasOwn(projectCategories, project.category))
    throw new Error(`Categoría inválida: ${project.id}`);
  for (const image of [project.image, project.homeImage].filter(Boolean)) {
    const file = path.resolve(root, '.' + image);
    if (
      !image.startsWith('/') ||
      !file.startsWith(root + path.sep) ||
      !fs.existsSync(file) ||
      !fs.statSync(file).isFile()
    ) {
      throw new Error(
        `Imagen inexistente o ruta inválida en ${project.id}: ${image}`,
      );
    }
  }
  if (project.homeImage && !project.homeAlt?.trim())
    throw new Error(`Falta homeAlt: ${project.id}`);
}
console.log(`Catálogo válido: ${projects.length} proyectos y sus imágenes.`);
