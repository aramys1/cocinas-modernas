import Cotizar from '@/components/Cotizar';
import ProjectGallery from '@/components/ProjectGallery';
import { publishedProjects, parseCategory } from '@/data/projects';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(
  'Galería de muebles a medida en Panamá',
  'Explora cocinas, clósets, muebles de TV y remodelaciones. Encuentra ideas para tu próximo proyecto a medida en Panamá.',
  '/galeria',
);

export default async function GaleriaPage({
  searchParams,
}: {
  searchParams: Promise<{ categoria?: string | string[] }>;
}) {
  const params = await searchParams;
  const category = parseCategory(
    typeof params.categoria === 'string' ? params.categoria : null,
  );
  return (
    <main id="contenido" tabIndex={-1} className="bg-white">
      <section className="px-6 pb-10 pt-28 md:px-12 md:pb-14 md:pt-32">
        <div className="mx-auto max-w-[1584px] text-center">
          <p className="eyebrow mb-4">Nuestro trabajo</p>
          <h1 className="page-title">Galería de proyectos</h1>
          <div className="mx-auto mt-6 h-0.5 w-20 bg-[#D9B37A]" />
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
            Explora nuestros diseños y proyectos de muebles a medida y encuentra
            inspiración para transformar tu espacio.
          </p>
        </div>
      </section>
      <ProjectGallery
        key={category}
        projects={publishedProjects}
        initialCategory={category}
      />
      <Cotizar />
    </main>
  );
}
