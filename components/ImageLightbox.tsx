'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Phone,
} from 'lucide-react';

import { FaWhatsapp } from 'react-icons/fa';

export type GalleryProject = {
  id: number;
  title: string;
  category: string;
  image: string;
};

type ImageLightboxProps = {
  projects: GalleryProject[];
  currentIndex: number;
  onClose: () => void;
  onChange: (index: number) => void;
};

export default function ImageLightbox({
  projects,
  currentIndex,
  onClose,
  onChange,
}: ImageLightboxProps) {
  const [zoom, setZoom] = useState(1);

  const project = projects[currentIndex];

  const showPrevious = () => {
    const previousIndex =
      currentIndex === 0
        ? projects.length - 1
        : currentIndex - 1;

    onChange(previousIndex);
  };

  const showNext = () => {
    const nextIndex =
      currentIndex === projects.length - 1
        ? 0
        : currentIndex + 1;

    onChange(nextIndex);
  };

  /*
   * REGRESAR EL ZOOM A 100%
   * AL CAMBIAR DE IMAGEN
   */
  useEffect(() => {
    setZoom(1);
  }, [currentIndex]);

  /*
   * BLOQUEAR LA PÁGINA DE ATRÁS
   * Y ACTIVAR TECLADO EN ESCRITORIO
   */
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }

      if (event.key === 'ArrowLeft') {
        showPrevious();
      }

      if (event.key === 'ArrowRight') {
        showNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  if (!project) {
    return null;
  }

  const zoomIn = () => {
    setZoom((currentZoom) =>
      Math.min(currentZoom + 0.5, 2.5)
    );
  };

  const zoomOut = () => {
    setZoom((currentZoom) =>
      Math.max(currentZoom - 0.5, 1)
    );
  };

  const toggleZoom = () => {
    setZoom((currentZoom) =>
      currentZoom === 1 ? 1.8 : 1
    );
  };

  /*
   * WHATSAPP
   */
  const message = encodeURIComponent(
    `Hola, vi el proyecto "${project.title}" en la galería y quisiera cotizar algo similar.`
  );

  const whatsappUrl =
    `https://wa.me/50768414434?text=${message}`;

  return (
    <div
      className="
        fixed
        inset-0
        z-[200]

        overflow-y-auto

        bg-black/90
        backdrop-blur-md
      "
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >

      {/*
        CONTENEDOR EXTERIOR

        En móvil usamos items-start para permitir
        que el contenido crezca verticalmente.

        En desktop vuelve a estar centrado.
      */}
      <div
        className="
          flex
          min-h-full
          items-start
          justify-center

          p-3
          py-5

          sm:p-5
          sm:py-7

          lg:items-center
          lg:p-8
        "
      >

        {/* CONTENEDOR PRINCIPAL */}
        <div
          className="
            relative
            w-full
            max-w-[1500px]

            overflow-hidden
            rounded-2xl
            bg-[#111111]
            shadow-2xl

            lg:grid
            lg:max-h-[90vh]
            lg:grid-cols-[minmax(0,1fr)_360px]
          "
        >

          {/* =================================
              IMAGEN
          ================================= */}
          <div
            className="
              relative
              h-[55vh]
              min-h-[350px]
              overflow-hidden
              bg-black

              sm:h-[65vh]

              lg:h-auto
              lg:min-h-[82vh]
            "
          >

            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 75vw"
              onClick={toggleZoom}
              className={`
                object-contain
                transition-transform
                duration-300
                ease-out

                ${
                  zoom === 1
                    ? 'cursor-zoom-in'
                    : 'cursor-zoom-out'
                }
              `}
              style={{
                transform: `scale(${zoom})`,
              }}
            />


            {/* CERRAR */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar imagen"
              className="
                absolute
                right-3
                top-3
                z-20

                flex
                h-11
                w-11
                items-center
                justify-center

                rounded-full
                border
                border-white/20
                bg-black/50
                text-white
                backdrop-blur-md

                transition-all
                duration-300

                hover:bg-white
                hover:text-black

                sm:right-4
                sm:top-4
              "
            >
              <X size={22} />
            </button>


            {/* ANTERIOR */}
            {projects.length > 1 && (
              <button
                type="button"
                onClick={showPrevious}
                aria-label="Proyecto anterior"
                className="
                  absolute
                  left-3
                  top-1/2
                  z-20

                  flex
                  h-11
                  w-11
                  -translate-y-1/2
                  items-center
                  justify-center

                  rounded-full
                  border
                  border-white/20
                  bg-black/40
                  text-white
                  backdrop-blur-md

                  transition-all
                  duration-300

                  hover:bg-white
                  hover:text-black

                  sm:left-5
                "
              >
                <ChevronLeft size={24} />
              </button>
            )}


            {/* SIGUIENTE */}
            {projects.length > 1 && (
              <button
                type="button"
                onClick={showNext}
                aria-label="Proyecto siguiente"
                className="
                  absolute
                  right-3
                  top-1/2
                  z-20

                  flex
                  h-11
                  w-11
                  -translate-y-1/2
                  items-center
                  justify-center

                  rounded-full
                  border
                  border-white/20
                  bg-black/40
                  text-white
                  backdrop-blur-md

                  transition-all
                  duration-300

                  hover:bg-white
                  hover:text-black

                  sm:right-5
                "
              >
                <ChevronRight size={24} />
              </button>
            )}


            {/* ZOOM */}
            <div
              className="
                absolute
                bottom-4
                left-1/2
                z-20

                flex
                -translate-x-1/2
                items-center
                gap-1

                rounded-full
                border
                border-white/20
                bg-black/60
                p-1.5

                text-white
                backdrop-blur-md
              "
            >

              <button
                type="button"
                onClick={zoomOut}
                disabled={zoom <= 1}
                aria-label="Alejar imagen"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center

                  rounded-full

                  transition-colors

                  hover:bg-white/15

                  disabled:cursor-not-allowed
                  disabled:opacity-30
                "
              >
                <ZoomOut size={19} />
              </button>


              <span
                className="
                  min-w-[54px]
                  text-center
                  text-xs
                  font-medium
                  text-white/80
                "
              >
                {Math.round(zoom * 100)}%
              </span>


              <button
                type="button"
                onClick={zoomIn}
                disabled={zoom >= 2.5}
                aria-label="Acercar imagen"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center

                  rounded-full

                  transition-colors

                  hover:bg-white/15

                  disabled:cursor-not-allowed
                  disabled:opacity-30
                "
              >
                <ZoomIn size={19} />
              </button>

            </div>

          </div>


          {/* =================================
              INFORMACIÓN
          ================================= */}
          <aside
            className="
              flex
              flex-col
              justify-between

              bg-[#151515]
              p-6
              text-white

              sm:p-8

              lg:overflow-y-auto
              lg:p-9
            "
          >

            <div>

              {/* CATEGORÍA */}
              <p
                className="
                  mb-3
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[#D9B37A]
                "
              >
                {project.category}
              </p>


              {/* TÍTULO */}
              <h2
                className="
                  text-2xl
                  font-semibold
                  leading-tight
                  sm:text-3xl
                "
              >
                {project.title}
              </h2>


              {/* LÍNEA */}
              <div className="mt-6 h-[2px] w-16 bg-[#D9B37A]" />


              {/* POSICIÓN */}
              <p className="mt-5 text-sm text-white/50">
                Proyecto {currentIndex + 1} de {projects.length}
              </p>

            </div>


            {/* =================================
                CTA
            ================================= */}
            <div className="mt-8 border-t border-white/10 pt-7">

              <p className="text-lg font-semibold">
                ¿Te gustó este proyecto?
              </p>

              <p className="mt-2 text-sm leading-relaxed text-white/60">
                Cuéntanos qué tienes en mente y podemos cotizar
                un diseño inspirado en este trabajo.
              </p>


              {/* WHATSAPP */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-6
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-3

                  rounded-xl
                  bg-[#D9B37A]
                  px-5
                  py-4

                  text-sm
                  font-semibold
                  text-white

                  transition-all
                  duration-300

                  hover:-translate-y-0.5
                  hover:bg-[#C9A66B]
                  hover:shadow-lg
                "
              >
                <FaWhatsapp size={21} />

                Cotizar un proyecto similar
              </a>


              {/* NÚMERO DE TELÉFONO */}
              <div
                className="
                  mt-5
                  flex
                  flex-col
                  items-center
                  justify-center
                  gap-1
                  text-center
                "
              >

                <span className="text-xs text-white/45">
                  También puedes contactarnos al
                </span>

                <a
                  href="tel:+50768414434"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-semibold
                    text-white/85
                    transition-colors
                    duration-300
                    hover:text-[#D9B37A]
                  "
                >
                  <Phone size={15} />

                  +507 6841-4434
                </a>

              </div>

            </div>

          </aside>

        </div>

      </div>

    </div>
  );
}