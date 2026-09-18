import { whatsappLink } from '@/lib/site-config';
import Image from 'next/image';
import Link from 'next/link';

import { ArrowUpRight } from 'lucide-react';

import Reveal from '@/components/Reveal';

type ServiceHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  whatsappMessage: string;
  projectsHref?: string;
  ctaLabel?: string;
};

export default function ServiceHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  whatsappMessage,
  projectsHref,
  ctaLabel = 'Cotizar mi proyecto',
}: ServiceHeroProps) {
  const whatsappUrl = whatsappLink(whatsappMessage);

  return (
    <section className="relative min-h-[82svh] overflow-hidden bg-black">
      {/* IMAGEN */}
      <Image
        src={image}
        alt={imageAlt}
        fill
        preload
        sizes="100vw"
        className="object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/15" />

      {/* CONTENIDO */}
      <div className="relative z-10 mx-auto flex min-h-[82svh] max-w-[1584px] items-center px-6 py-28 md:px-12">
        <div className="max-w-3xl">
          {/* TEXTO SUPERIOR */}
          <Reveal delay={100}>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#D9B37A]">
              {eyebrow}
            </p>
          </Reveal>

          {/* TITULO */}
          <Reveal delay={220}>
            <h1
              className="max-w-3xl tracking-tight text-white page-title"
              style={{
                fontFamily: 'var(--font-display)',
              }}
            >
              {title}
            </h1>
          </Reveal>

          {/* LINEA */}
          <Reveal delay={360}>
            <div className="my-7 h-[2px] w-20 bg-[#D9B37A]" />
          </Reveal>

          {/* DESCRIPCION */}
          <Reveal delay={480}>
            <p className="max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg md:text-xl">
              {description}
            </p>
          </Reveal>

          {/* BOTONES */}
          <Reveal delay={620}>
            <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              {/* WHATSAPP */}
              <Link
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#D9B37A] px-7 py-4 font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C9A66B]"
              >
                {ctaLabel}

                <ArrowUpRight
                  size={19}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              {/* VER PROYECTOS */}
              {projectsHref && (
                <Link
                  href={projectsHref}
                  className="inline-flex items-center gap-2 px-2 py-3 font-semibold text-white transition-colors duration-300 hover:text-[#D9B37A]"
                >
                  Ver nuestros proyectos
                </Link>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
