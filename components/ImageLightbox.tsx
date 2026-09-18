'use client';

import { useState } from 'react';
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
import Modal from './Modal';
import { projectCategories, type Project } from '@/data/projects';
import { siteConfig, whatsappLink } from '@/lib/site-config';

export type GalleryProject = Omit<Project, 'alt'> & { alt?: string };
type Props = {
  projects: GalleryProject[];
  currentIndex: number;
  onClose: () => void;
  onChange: (index: number) => void;
};
const control =
  'flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-black/65 text-white transition-colors hover:bg-white hover:text-black disabled:opacity-40';

function ZoomableImage({ project }: { project: GalleryProject }) {
  const [zoom, setZoom] = useState(1);
  return (
    <>
      <div className="absolute inset-0 overflow-auto overscroll-contain">
        <button
          type="button"
          aria-label={zoom > 1 ? 'Restablecer zoom' : 'Ampliar imagen'}
          aria-pressed={zoom > 1}
          onClick={() => setZoom(zoom === 1 ? 1.8 : 1)}
          className="relative block min-h-full min-w-full"
          style={{
            width: `${zoom * 100}%`,
            height: `${zoom * 100}%`,
            cursor: zoom > 1 ? 'zoom-out' : 'zoom-in',
          }}
        >
          <Image
            src={project.image}
            alt={project.alt || project.title}
            fill
            loading="eager"
            sizes="(max-width: 1023px) 100vw, (max-width: 1500px) 70vw, 1100px"
            className="object-contain"
          />
        </button>
      </div>
      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1 rounded-full bg-black/80 p-1.5 text-white">
        <button
          type="button"
          onClick={() => setZoom((value) => Math.max(1, value - 0.5))}
          disabled={zoom <= 1}
          aria-label="Alejar imagen"
          className={control}
        >
          <ZoomOut size={19} />
        </button>
        <output
          className="min-w-14 text-center text-sm"
          aria-label="Nivel de zoom"
        >
          {Math.round(zoom * 100)}%
        </output>
        <button
          type="button"
          onClick={() => setZoom((value) => Math.min(2.5, value + 0.5))}
          disabled={zoom >= 2.5}
          aria-label="Acercar imagen"
          className={control}
        >
          <ZoomIn size={19} />
        </button>
      </div>
    </>
  );
}

export default function ImageLightbox({
  projects,
  currentIndex,
  onClose,
  onChange,
}: Props) {
  const project = projects[currentIndex];
  if (!project) return null;
  const change = (delta: number) =>
    onChange((currentIndex + delta + projects.length) % projects.length);
  const details = [
    ['Ubicación', project.location],
    ['Tipo de proyecto', project.projectType],
    ['Duración / instalación', project.duration],
  ].filter(([, value]) => value?.trim());
  return (
    <Modal
      label="Galería de proyectos"
      onClose={onClose}
      className="lightbox-modal"
      onKeyDown={(event) => {
        // Arrow keys pan the enlarged image; elsewhere they navigate the gallery.
        if (
          (event.target as HTMLElement).closest(
            '[aria-label="Restablecer zoom"]',
          )
        )
          return;
        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
          event.preventDefault();
          change(event.key === 'ArrowLeft' ? -1 : 1);
        }
      }}
    >
      <div className="relative mx-auto w-full max-w-[1500px] overflow-hidden rounded-2xl bg-[#111] shadow-2xl lg:grid lg:grid-cols-[minmax(0,1fr)_360px]">
        <div className="relative h-[55svh] min-h-[260px] overflow-hidden bg-black sm:h-[65svh] lg:h-[82svh]">
          <ZoomableImage key={project.id} project={project} />
          <button
            type="button"
            onClick={onClose}
            data-modal-close
            aria-label="Cerrar imagen"
            className={`${control} absolute right-3 top-3 z-20`}
          >
            <X size={22} />
          </button>
          {projects.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => change(-1)}
                aria-label="Proyecto anterior"
                className={`${control} absolute left-3 top-1/2 z-10 -translate-y-1/2`}
              >
                <ChevronLeft size={24} />
              </button>
              <button
                type="button"
                onClick={() => change(1)}
                aria-label="Proyecto siguiente"
                className={`${control} absolute right-3 top-1/2 z-10 -translate-y-1/2`}
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
        </div>
        <aside className="flex min-w-0 flex-col justify-between bg-[#151515] p-6 text-white sm:p-8 lg:max-h-[82svh] lg:overflow-y-auto">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#D9B37A]">
              {projectCategories[project.category]}
            </p>
            <h2 className="text-2xl font-semibold leading-tight sm:text-3xl">
              {project.title}
            </h2>
            <div className="mt-6 h-0.5 w-16 bg-[#D9B37A]" />
            <p className="mt-5 text-sm text-white/70" aria-live="polite">
              Proyecto {currentIndex + 1} de {projects.length}: {project.title}
            </p>
            {project.description?.trim() && (
              <section className="mt-7">
                <h3 className="text-lg font-semibold">Sobre el proyecto</h3>
                <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-white/75">
                  {project.description}
                </p>
              </section>
            )}
            {details.length > 0 && (
              <section className="mt-7">
                <h3 className="text-lg font-semibold">Detalles</h3>
                <dl className="mt-3 space-y-4">
                  {details.map(([label, value]) => (
                    <div key={label}>
                      <dt className="text-xs text-white/65">{label}</dt>
                      <dd className="mt-1 text-sm leading-relaxed">{value}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            )}
          </div>
          <div className="mt-8 border-t border-white/10 pt-7">
            <p className="text-lg font-semibold">¿Te gustó este proyecto?</p>
            <p className="mt-2 text-sm leading-relaxed text-white/75">
              Cuéntanos qué tienes en mente y podemos cotizar un diseño
              inspirado en este trabajo.
            </p>
            <a
              href={whatsappLink(
                `Hola, vi el proyecto "${project.title}" en la galería y quisiera cotizar algo similar.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="button-gold mt-6 w-full gap-3 text-sm"
            >
              <FaWhatsapp size={21} className="shrink-0" />
              Cotizar un proyecto similar
            </a>
            <p className="mt-5 text-center text-xs text-white/65">
              También puedes contactarnos al
            </p>
            <a
              href={siteConfig.phoneHref}
              className="mt-1 flex min-h-11 items-center justify-center gap-2 text-sm font-semibold hover:text-[#D9B37A]"
            >
              <Phone size={15} />
              {siteConfig.phone}
            </a>
          </div>
        </aside>
      </div>
    </Modal>
  );
}
