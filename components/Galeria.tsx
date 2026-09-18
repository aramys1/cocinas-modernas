import { featuredProjects, projectCategories } from '@/data/projects';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';

const categories = featuredProjects.map((project, index) => ({
  ...project,
  title: projectCategories[project.category],
  description: project.title,
  image: project.homeImage ?? project.image,
  alt: project.homeAlt ?? project.alt,
  href: '/galeria?categoria=' + project.category,
  className:
    index === 0
      ? 'xl:col-span-2 xl:row-span-2'
      : index === 3
        ? 'xl:col-span-2'
        : 'xl:col-span-1',
}));

export default function Galeria() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-[1584px] px-6 md:px-12">
        {/* ENCABEZADO */}
        <div className="mb-12 md:mb-14">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            {/* TEXTO DEL ENCABEZADO */}
            <Reveal>
              <div className="max-w-3xl">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#816037]">
                  Nuestro trabajo
                </p>

                <h2 className="tracking-tight text-black section-title">
                  Nuestros proyectos
                </h2>

                <div className="mt-6 h-[2px] w-20 bg-[#D9B37A]" />

                <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
                  Cada proyecto es diseñado y fabricado a medida para combinar
                  funcionalidad, calidad y un estilo que se adapte a cada
                  espacio.
                </p>
              </div>
            </Reveal>

            {/* LINK A GALERÍA COMPLETA */}
            <Reveal delay={150}>
              <Link
                href="/galeria"
                className="group inline-flex w-fit items-center gap-2 text-lg font-semibold text-black transition-colors duration-300 hover:text-[#816037] lg:mb-1"
              >
                Ver todos los proyectos
                <ArrowUpRight
                  size={18}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </Reveal>
          </div>
        </div>

        {/* GALERÍA */}
        <div className="grid grid-cols-1 gap-4 auto-rows-[320px] sm:auto-rows-[360px] md:grid-cols-2 md:auto-rows-[340px] lg:gap-5 xl:grid-cols-4 xl:grid-rows-[280px_280px] xl:auto-rows-[280px]">
          {categories.map((item, index) => (
            <Reveal
              key={item.id}
              delay={index * 120}
              className={item.className}
            >
              <Link
                href={item.href}
                className="group relative block h-full w-full overflow-hidden rounded-2xl"
              >
                {/* IMAGEN */}
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes={
                    index === 0 || index === 3
                      ? '(max-width: 767px) 100vw, (max-width: 1584px) 50vw, 744px'
                      : '(max-width: 767px) 100vw, (max-width: 1279px) 50vw, (max-width: 1584px) 25vw, 372px'
                  }
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* OSCURECIMIENTO */}
                <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/20" />

                {/* DEGRADADO */}
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

                {/* CONTENIDO */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 md:p-7">
                  <div className="flex items-end justify-between gap-4">
                    <div className="max-w-lg">
                      <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-relaxed text-white/80 sm:text-base">
                        {item.description}
                      </p>
                    </div>

                    {/* FLECHA */}
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/40 bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:translate-x-1 group-hover:border-[#D9B37A] group-hover:bg-[#D9B37A]">
                      <ArrowUpRight
                        size={20}
                        strokeWidth={1.8}
                        className="text-white"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
