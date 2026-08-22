'use client';

import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { ArrowUpRight, Plus } from 'lucide-react';

import Reveal from '@/components/Reveal';

import ImageLightbox, {
  type GalleryProject,
} from '@/components/ImageLightbox';

export type ServiceProject = GalleryProject & {
  alt: string;
};

type ServiceProjectsProps = {
  eyebrow: string;
  title: string;
  description: string;
  projects: ServiceProject[];
  galleryHref: string;
  galleryLabel?: string;
};

export default function ServiceProjects({
  eyebrow,
  title,
  description,
  projects,
  galleryHref,
  galleryLabel = 'Ver más proyectos',
}: ServiceProjectsProps) {
  const [selectedIndex, setSelectedIndex] =
    useState<number | null>(null);

  return (
    <section
      id="proyectos"
      className="bg-white py-20 md:py-24"
    >

      <div
        className="
          mx-auto
          max-w-[1584px]
          px-6
          md:px-16
          lg:px-24
        "
      >

        {/* HEADER */}
        <Reveal>

          <div className="mb-12 max-w-3xl">

            <p
              className="
                mb-4
                text-sm
                font-semibold
                uppercase
                tracking-[0.25em]
                text-[#B9945E]
              "
            >
              {eyebrow}
            </p>


            <h2
              className="
                text-3xl
                font-semibold
                leading-tight
                text-black
                md:text-5xl
              "
              style={{
                fontFamily: 'var(--font-display)',
              }}
            >
              {title}
            </h2>


            <div className="mt-6 h-[2px] w-20 bg-[#D9B37A]" />


            <p
              className="
                mt-6
                max-w-2xl
                text-base
                leading-relaxed
                text-gray-600
                md:text-lg
              "
            >
              {description}
            </p>

          </div>

        </Reveal>


        {/* GRID */}
        <div
          className="
            grid
            grid-cols-1
            gap-5
            md:grid-cols-2
            lg:gap-6
          "
        >

          {projects.map((project, index) => (

            <Reveal
              key={project.id}
              delay={index * 180}
            >

              <button
                type="button"
                onClick={() =>
                  setSelectedIndex(index)
                }
                aria-label={`Ver ${project.title}`}
                className="
                  group
                  relative
                  block
                  aspect-[4/3]
                  w-full
                  overflow-hidden
                  rounded-2xl
                  bg-gray-100
                  text-left
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#D9B37A]
                  focus-visible:ring-offset-2
                "
              >

                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="
                    (max-width: 768px) 100vw,
                    50vw
                  "
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-105
                  "
                />


                <div
                  className="
                    absolute
                    inset-0
                    bg-black/5
                    transition-colors
                    duration-500
                    group-hover:bg-black/15
                  "
                />


                <div
                  className="
                    absolute
                    inset-x-0
                    bottom-0
                    h-1/3
                    bg-gradient-to-t
                    from-black/75
                    via-black/25
                    to-transparent
                  "
                />


                {/* BOTÓN + */}
                <div
                  className="
                    absolute
                    right-5
                    top-5

                    flex
                    h-11
                    w-11
                    items-center
                    justify-center

                    rounded-full
                    border
                    border-white/30
                    bg-black/30

                    text-white
                    backdrop-blur-sm

                    opacity-80

                    transition-all
                    duration-300

                    group-hover:bg-black/50
                    group-hover:opacity-100
                  "
                >
                  <Plus size={19} />
                </div>


                {/* CATEGORÍA */}
                <div
                  className="
                    absolute
                    inset-x-0
                    bottom-0
                    p-5
                    md:p-6
                  "
                >

                  <p
                    className="
                      text-sm
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-[#E0B978]
                    "
                  >
                    {project.category}
                  </p>

                </div>

              </button>

            </Reveal>

          ))}

        </div>


        {/* VER MÁS PROYECTOS */}
        <Reveal delay={200}>

          <div className="mt-10">

            <Link
              href={galleryHref}
              className="
                group
                inline-flex
                items-center
                gap-2
                text-lg
                font-semibold
                text-black
                transition-colors
                duration-300
                hover:text-[#B9945E]
              "
            >
              {galleryLabel}

              <ArrowUpRight
                size={19}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </Link>

          </div>

        </Reveal>

      </div>


      {/* LIGHTBOX */}
      {selectedIndex !== null && (

        <ImageLightbox
          projects={projects}
          currentIndex={selectedIndex}
          onClose={() =>
            setSelectedIndex(null)
          }
          onChange={(index) =>
            setSelectedIndex(index)
          }
        />

      )}

    </section>
  );
}