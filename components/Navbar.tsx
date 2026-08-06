'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

import {
  Home,
  LayoutGrid,
  DoorOpen,
  Monitor,
  Wrench,
  Mail,
  ChevronRight,
  X,
} from 'lucide-react';

import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';

// NAV ITEM
const NavItem = ({
  icon: Icon,
  label,
}: {
  icon: any;
  label: string;
}) => (
  <Link
    href={`/${label.toLowerCase().replace(/\s+/g, '')}`}
    className="flex items-center gap-4 text-white/90 hover:text-orange-400 transition-all duration-300 group py-2"
  >
    <Icon
      size={22}
      strokeWidth={1.5}
      className="group-hover:scale-110 transition-transform duration-300"
    />

    <span className="text-lg font-light tracking-wide">
      {label}
    </span>
  </Link>
);

// SOCIAL ITEM
const SocialItem = ({
  icon: Icon,
  label,
  arrow,
}: {
  icon: any;
  label: string;
  arrow?: boolean;
}) => (
  <a
    href="#"
    className="flex items-center justify-between group"
  >
    <div className="flex items-center gap-4">
      <Icon
        size={20}
        className="text-white/70 group-hover:text-orange-400 transition-colors duration-300"
      />

      <span className="font-light text-white/80 group-hover:text-white transition-colors duration-300">
        {label}
      </span>
    </div>

    {arrow && (
      <ChevronRight
        size={18}
        className="text-orange-400 opacity-0 translate-x-[-5px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
      />
    )}
  </a>
);

// NAV LINKS
const navLinks = [
  { name: 'Inicio', href: '/' },
  { name: 'Cocinas', href: '/cocinas' },
  { name: 'Clósets', href: '/closets' },
  { name: 'Centros de Tv', href: '/tv' },
  { name: 'Contacto', href: '/contacto' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // NAVBAR SCROLL STATE
  const [scrolled, setScrolled] = useState(false);

  // DETECTAR SCROLL
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // BLOQUEAR SCROLL CUANDO ABRE MENU
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`absolute w-full z-50 text-white transition-all duration-500 ${
          scrolled
            ? 'bg-black/60 backdrop-blur-md shadow-lg py-1'
            : 'bg-black py-3'
        }`}
      >
        <div className="max-w-[1584px] mx-auto px-6 md:px-12">
          <div className="flex justify-between items-center h-8 md:h-8">
            
            {/* LOGO */}
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="text-sm md:text-base font-bold tracking-[0.15em] uppercase"
              >
                Cocinas Modernas
              </Link>
            </div>

            {/* DESKTOP MENU */}
            <div className="hidden lg:block">
              <div className="flex items-center space-x-10 text-xs font-medium uppercase tracking-[0.2em]">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="relative hover:text-orange-400 transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* MOBILE BUTTON */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(true)}
                className="p-2 text-white hover:text-orange-400 transition-colors duration-300"
              >
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          
          {/* OVERLAY */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* SIDEBAR */}
          <div className="relative w-[85%] max-w-[380px] h-full bg-[#121212]/95 backdrop-blur-2xl text-white flex flex-col p-8 shadow-2xl border-l border-white/5 transition-transform duration-300">

            {/* CLOSE */}
            <div className="flex justify-end mb-12">
              <button
                onClick={() => setIsOpen(false)}
                className="hover:rotate-90 transition-transform duration-300"
              >
                <X className="w-9 h-9 stroke-[1.2]" />
              </button>
            </div>

            {/* NAVIGATION */}
            <nav className="flex flex-col gap-5 flex-1 overflow-y-auto">

              <NavItem icon={Home} label="Inicio" />
              <NavItem icon={LayoutGrid} label="Cocinas" />
              <NavItem icon={DoorOpen} label="Closets" />
              <NavItem icon={Monitor} label="Centros de TV" />
              <NavItem icon={Wrench} label="Remodelaciones" />
              <NavItem icon={Mail} label="Contacto" />

              <div className="h-[1px] bg-white/10 my-6" />

              <p className="text-[10px] uppercase tracking-[0.3em] text-orange-400 font-semibold mb-2">
                Contáctanos
              </p>

              <div className="flex flex-col gap-6">
                <SocialItem
                  icon={FaInstagram}
                  label="Instagram"
                />

                <SocialItem
                  icon={FaFacebookF}
                  label="Facebook"
                />

                <SocialItem
                  icon={FaWhatsapp}
                  label="WhatsApp"
                  arrow
                />
              </div>
            </nav>

            {/* FOOTER */}
            <div className="mt-auto pt-10 text-[10px] text-gray-500 uppercase tracking-widest">
              Arraiján, Panamá Oeste
            </div>
          </div>
        </div>
      )}
    </>
  );
}