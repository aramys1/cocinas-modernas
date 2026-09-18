'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home,
  Images,
  LayoutGrid,
  DoorOpen,
  Monitor,
  Mail,
  PaintRoller,
  Menu,
  X,
} from 'lucide-react';
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import Modal from './Modal';
import { siteConfig, whatsappLink } from '@/lib/site-config';

const links = [
  { name: 'Inicio', href: '/', icon: Home },
  { name: 'Galería', href: '/galeria', icon: Images },
  { name: 'Cocinas', href: '/cocinas', icon: LayoutGrid },
  { name: 'Clósets', href: '/closets', icon: DoorOpen },
  { name: 'Centros de TV', href: '/centros-de-tv', icon: Monitor },
  { name: 'Remodelaciones', href: '/remodelaciones', icon: PaintRoller },
  { name: 'Cotizar', href: '/#cotizar', icon: Mail },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    let lastY = window.scrollY;
    let distance = 0;
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = Math.max(0, window.scrollY);
      const delta = y - lastY;
      if (delta * distance < 0) distance = 0;
      distance += delta;
      setScrolled(y > 80);
      if (y < 80 || navRef.current?.contains(document.activeElement)) {
        setVisible(true);
        distance = 0;
      } else if (distance > 100) {
        setVisible(false);
        distance = 0;
      } else if (distance < -20) {
        setVisible(true);
        distance = 0;
      }
      lastY = y;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1280px)');
    const closeDesktop = () => {
      if (media.matches) setIsOpen(false);
    };
    media.addEventListener('change', closeDesktop);
    return () => media.removeEventListener('change', closeDesktop);
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        aria-label="Navegación principal"
        onFocusCapture={() => setVisible(true)}
        className={`site-nav fixed inset-x-0 top-0 z-50 py-3 text-white ${visible || isOpen ? 'translate-y-0' : '-translate-y-full'} ${scrolled ? 'bg-black/95 shadow-lg backdrop-blur-md' : 'bg-black'}`}
      >
        <div className="mx-auto flex h-8 max-w-[1584px] items-center justify-between gap-6 px-6 md:px-12">
          <Link
            href="/"
            className="shrink-0 font-display text-sm font-bold uppercase tracking-[0.12em] md:text-base"
          >
            {siteConfig.name}
          </Link>
          <div className="hidden items-center gap-5 text-xs font-medium uppercase tracking-[0.12em] xl:flex 2xl:gap-8">
            {links.map(({ name, href }) => (
              <Link
                key={href}
                href={href}
                aria-current={pathname === href ? 'page' : undefined}
                className="whitespace-nowrap py-3 transition-colors hover:text-[#D9B37A]"
              >
                {name}
              </Link>
            ))}
          </div>
          <button
            type="button"
            aria-label="Abrir menú"
            aria-expanded={isOpen}
            aria-controls={isOpen ? 'menu-movil' : undefined}
            onClick={() => setIsOpen(true)}
            className="flex h-11 w-11 shrink-0 items-center justify-center xl:hidden"
          >
            <Menu size={27} />
          </button>
        </div>
      </nav>
      {isOpen && (
        <Modal
          label="Menú de navegación"
          onClose={() => setIsOpen(false)}
          className="mobile-menu"
        >
          <div
            id="menu-movil"
            className="ml-auto flex min-h-full w-[88%] max-w-[380px] flex-col border-l border-white/10 bg-[#121212] p-6 text-white sm:p-8"
          >
            <div className="mb-6 flex justify-end">
              <button
                type="button"
                data-modal-close
                aria-label="Cerrar menú"
                onClick={() => setIsOpen(false)}
                className="flex h-11 w-11 items-center justify-center"
              >
                <X size={32} />
              </button>
            </div>
            <nav aria-label="Navegación móvil" className="flex flex-col gap-2">
              {links.map(({ name, href, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  aria-current={pathname === href ? 'page' : undefined}
                  onClick={() => setIsOpen(false)}
                  className="flex min-h-11 items-center gap-4 py-2 text-lg text-white/90 hover:text-[#D9B37A]"
                >
                  <Icon size={22} strokeWidth={1.5} />
                  {name}
                </Link>
              ))}
            </nav>
            <div className="my-6 border-t border-white/10" />
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#D9B37A]">
              Contáctanos
            </p>
            <div className="flex flex-col gap-2">
              {[
                {
                  label: 'Instagram',
                  url: siteConfig.social.instagram,
                  icon: FaInstagram,
                },
                {
                  label: 'Facebook',
                  url: siteConfig.social.facebook,
                  icon: FaFacebookF,
                },
                {
                  label: 'WhatsApp',
                  url: whatsappLink('Hola, quisiera cotizar un proyecto.'),
                  icon: FaWhatsapp,
                },
              ].map(({ label, url, icon: Icon }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-11 items-center gap-4 text-white/80 hover:text-[#D9B37A]"
                >
                  <Icon size={20} />
                  {label}
                </a>
              ))}
            </div>
            <p className="mt-auto pt-8 text-xs leading-relaxed text-white/65">
              {siteConfig.location}
              <br />
              {siteConfig.serviceArea}
            </p>
          </div>
        </Modal>
      )}
    </>
  );
}
