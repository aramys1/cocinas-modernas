'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Reveal from './Reveal';
import ImageLightbox from './ImageLightbox';
import {
  parseCategory,
  projectCategories,
  type Project,
  type ProjectCategory,
} from '@/data/projects';

type Category = ProjectCategory | 'todos';

export default function ProjectGallery({
  projects,
  initialCategory,
}: {
  projects: Project[];
  initialCategory: Category;
}) {
  const [category, setCategory] = useState(initialCategory);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  useEffect(() => {
    const onPopState = () => {
      setCategory(
        parseCategory(
          new URL(window.location.href).searchParams.get('categoria'),
        ),
      );
      setSelectedIndex(null);
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);
  const filtered =
    category === 'todos'
      ? projects
      : projects.filter((project) => project.category === category);
  function select(value: Category) {
    setCategory(value);
    setSelectedIndex(null);
    const url = new URL(window.location.href);
    if (value === 'todos') url.searchParams.delete('categoria');
    else url.searchParams.set('categoria', value);
    window.history.pushState(
      null,
      '',
      `${url.pathname}${url.search}${url.hash}`,
    );
  }
  return (
    <>
      <section className="px-6 pb-12 md:px-12" aria-label="Filtrar proyectos">
        <div className="mx-auto flex max-w-[1584px] flex-wrap justify-center gap-3">
          {(
            [['todos', 'Todos'], ...Object.entries(projectCategories)] as [
              Category,
              string,
            ][]
          ).map(([value, label]) => (
            <button
              key={value}
              type="button"
              aria-pressed={category === value}
              onClick={() => select(value)}
              className={`min-h-11 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors ${category === value ? 'border-[#D9B37A] bg-[#D9B37A] text-black' : 'border-gray-300 bg-white text-black hover:border-[#B9945E]'}`}
            >
              {label}
            </button>
          ))}
        </div>
        <p role="status" className="sr-only">
          {filtered.length} proyectos en{' '}
          {category === 'todos'
            ? 'todas las categorías'
            : projectCategories[category]}
        </p>
      </section>
      <section className="px-6 pb-20 md:px-12 md:pb-24" aria-label="Proyectos">
        <div className="mx-auto max-w-[1584px]">
          {filtered.length ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((project, index) => (
                <Reveal key={project.id} delay={index * 80}>
                  <button
                    type="button"
                    onClick={() => setSelectedIndex(index)}
                    aria-label={`Ver proyecto ${project.title}`}
                    className="group relative block aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-100 text-left"
                  >
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      sizes="(max-width: 639px) calc(100vw - 48px), (max-width: 1023px) 50vw, (max-width: 1584px) 33vw, 490px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                    <span
                      className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/50 text-xl text-white"
                      aria-hidden="true"
                    >
                      +
                    </span>
                    <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E0B978]">
                        {projectCategories[project.category]}
                      </p>
                      <h2 className="mt-2 text-xl font-semibold text-white">
                        {project.title}
                      </h2>
                    </div>
                  </button>
                </Reveal>
              ))}
            </div>
          ) : (
            <p className="py-20 text-center text-lg text-gray-600">
              Aún no hay proyectos disponibles en esta categoría.
            </p>
          )}
        </div>
      </section>
      {selectedIndex !== null && (
        <ImageLightbox
          projects={filtered}
          currentIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
          onChange={setSelectedIndex}
        />
      )}
    </>
  );
}
