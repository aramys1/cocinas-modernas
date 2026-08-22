'use client';

import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';

import Cotizar from '@/components/Cotizar';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';

import ImageLightbox, {
  type GalleryProject,
} from '@/components/ImageLightbox';


const categories = [
  'Todos',
  'Cocinas',
  'Closets',
  'Centros de TV',
  'Baños',
  'Remodelaciones',
];


const projects: GalleryProject[] = [
  {
    id: 1,
    title: 'Cocina gris',
    category: 'Cocinas',
    image: '/cocina-gris.png',
  },
  {
    id: 2,
    title: 'Cocina moderna',
    category: 'Cocinas',
    image: '/process.png',
  },
  {
    id: 3,
    title: 'Closet a medida',
    category: 'Closets',
    image: '/closet.png',
  },
  {
    id: 4,
    title: 'Centro de entretenimiento',
    category: 'Centros de TV',
    image: '/centro-entretenimiento-gris.png',
  },
  {
    id: 5,
    title: 'Remodelación',
    category: 'Remodelaciones',
    image: '/galeria-remodelaciones.jpeg',
  },
  {
    id: 6,
    title: 'Closet moderno',
    category: 'Closets',
    image: '/galeria-closet.png',
  },
];


export default function GaleriaPage() {

  const searchParams = useSearchParams();

  const [selectedCategory, setSelectedCategory] =
    useState('Todos');

  /*
   * Guarda el índice de la imagen que está
   * abierta en el lightbox.
   *
   * null = lightbox cerrado.
   */
  const [selectedProjectIndex, setSelectedProjectIndex] =
    useState<number | null>(null);


  /*
   * LEER CATEGORÍA DESDE LA URL
   */
  useEffect(() => {

    const categoria = searchParams.get('categoria');

    if (
      categoria &&
      categories.includes(categoria)
    ) {
      setSelectedCategory(categoria);
    } else {
      setSelectedCategory('Todos');
    }

  }, [searchParams]);


  /*
   * FILTRAR PROYECTOS
   */
  const filteredProjects = useMemo(() => {

    if (selectedCategory === 'Todos') {
      return projects;
    }

    return projects.filter(
      (project) =>
        project.category === selectedCategory
    );

  }, [selectedCategory]);


  /*
   * CAMBIAR FILTRO
   */
  const handleCategoryChange = (category: string) => {

    /*
     * Cerramos cualquier imagen abierta.
     */
    setSelectedProjectIndex(null);

    setSelectedCategory(category);
  };


  return (
    <main className="bg-white">


      {/* =================================
          ENCABEZADO
      ================================= */}

      <section className="px-6 pb-10 pt-16 md:px-12 md:pb-14 md:pt-20">

        <Reveal delay={100}>

          <div className="mx-auto max-w-[1584px] text-center">

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
              Nuestro trabajo
            </p>


            <h1
              className="
                text-4xl
                font-semibold
                leading-tight
                tracking-tight
                text-black
                sm:text-5xl
                md:text-6xl
              "
            >
              Galería de proyectos
            </h1>


            <div
              className="
                mx-auto
                mt-6
                h-[2px]
                w-20
                bg-[#D9B37A]
              "
            />


            <p
              className="
                mx-auto
                mt-6
                max-w-2xl
                text-base
                leading-relaxed
                text-gray-600
                sm:text-lg
              "
            >
              Explora algunos de nuestros proyectos realizados y descubre cómo
              transformamos espacios con muebles hechos a medida.
            </p>

          </div>

        </Reveal>

      </section>



      {/* =================================
          FILTROS
      ================================= */}

      <section className="px-6 pb-12 md:px-12 md:pb-16">

        <div className="mx-auto max-w-[1584px]">

          <Reveal delay={250}>

            <div className="flex flex-wrap justify-center gap-3">

              {categories.map((category) => {

                const isActive =
                  selectedCategory === category;

                return (

                  <button
                    key={category}
                    type="button"
                    onClick={() =>
                      handleCategoryChange(category)
                    }
                    className={`
                      rounded-full
                      border
                      px-5
                      py-2.5
                      text-sm
                      font-semibold
                      transition-all
                      duration-300
                      sm:px-6
                      sm:py-3

                      ${
                        isActive
                          ? `
                            border-[#D9B37A]
                            bg-[#D9B37A]
                            text-white
                          `
                          : `
                            border-gray-300
                            bg-white
                            text-black
                            hover:border-[#D9B37A]
                            hover:text-[#B9945E]
                          `
                      }
                    `}
                  >
                    {category}
                  </button>

                );
              })}

            </div>

          </Reveal>

        </div>

      </section>



      {/* =================================
          GRID DE PROYECTOS
      ================================= */}

      <section className="px-6 pb-20 md:px-12 md:pb-24">

        <div className="mx-auto max-w-[1584px]">

          {filteredProjects.length > 0 ? (

            <div
              key={selectedCategory}
              className="
                grid
                grid-cols-1
                gap-5
                sm:grid-cols-2
                lg:grid-cols-3
              "
            >

              {filteredProjects.map(
                (project, index) => (

                  <Reveal
                    key={project.id}
                    delay={index * 180}
                  >

                    {/* TARJETA CLICABLE */}
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedProjectIndex(index)
                      }
                      aria-label={`Ver proyecto ${project.title}`}
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

                      {/* IMAGEN */}
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="
                          (max-width: 640px) 100vw,
                          (max-width: 1024px) 50vw,
                          33vw
                        "
                        className="
                          object-cover
                          transition-transform
                          duration-700
                          ease-out
                          group-hover:scale-105
                        "
                      />


                      {/* OSCURECIMIENTO */}
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


                      {/* DEGRADADO */}
                      <div
                        className="
                          absolute
                          inset-x-0
                          bottom-0
                          h-1/2
                          bg-gradient-to-t
                          from-black/80
                          via-black/30
                          to-transparent
                        "
                      />


                      {/* INDICADOR PARA VER */}
                      <div
                        className="
                          absolute
                          right-5
                          top-5
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-white/30
                          bg-black/20
                          text-white
                          opacity-0
                          backdrop-blur-sm
                          transition-all
                          duration-300
                          group-hover:opacity-100
                        "
                      >
                        <span className="text-xl">
                          +
                        </span>
                      </div>


                      {/* TEXTO */}
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
                            mb-2
                            text-xs
                            font-semibold
                            uppercase
                            tracking-[0.18em]
                            text-[#E0B978]
                          "
                        >
                          {project.category}
                        </p>


                        <h2
                          className="
                            text-2xl
                            font-semibold
                            text-white
                          "
                        >
                          {project.title}
                        </h2>

                      </div>

                    </button>

                  </Reveal>

                )
              )}

            </div>

          ) : (

            <Reveal>

              <div className="py-20 text-center">

                <p className="text-lg text-gray-500">
                  Aún no hay proyectos disponibles en esta categoría.
                </p>

              </div>

            </Reveal>

          )}

        </div>

      </section>



      {/* =================================
          LIGHTBOX
      ================================= */}

      {selectedProjectIndex !== null && (

        <ImageLightbox
          projects={filteredProjects}
          currentIndex={selectedProjectIndex}
          onClose={() =>
            setSelectedProjectIndex(null)
          }
          onChange={(index) =>
            setSelectedProjectIndex(index)
          }
        />

      )}



      {/* =================================
          CTA
      ================================= */}

      <Cotizar />


      {/* =================================
          FOOTER
      ================================= */}

      <Footer />

    </main>
  );
}