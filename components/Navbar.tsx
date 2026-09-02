'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

import {
  Home,
  Images,
  LayoutGrid,
  DoorOpen,
  Monitor,
  Mail,
  ChevronRight,
  X,
  PaintRoller,
} from 'lucide-react';

import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
} from 'react-icons/fa';


// ================================
// NAV ITEM MOBILE
// ================================

const NavItem = ({
  icon: Icon,
  label,
  href,
  onClick,
}: {
  icon: React.ElementType;
  label: string;
  href: string;
  onClick?: () => void;
}) => (
  <Link
    href={href}
    onClick={onClick}
    className="
      group
      flex
      items-center
      gap-4
      py-2
      text-white/90
      transition-all
      duration-300
      hover:text-orange-400
    "
  >
    <Icon
      size={22}
      strokeWidth={1.5}
      className="
        transition-transform
        duration-300
        group-hover:scale-110
      "
    />

    <span className="text-lg font-light tracking-wide">
      {label}
    </span>
  </Link>
);


// ================================
// SOCIAL ITEM
// ================================

const SocialItem = ({
  icon: Icon,
  label,
  href,
  arrow,
}: {
  icon: React.ElementType;
  label: string;
  href: string;
  arrow?: boolean;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center justify-between"
  >
    <div className="flex items-center gap-4">
      <Icon
        size={20}
        className="
          text-white/70
          transition-colors
          duration-300
          group-hover:text-orange-400
        "
      />

      <span
        className="
          font-light
          text-white/80
          transition-colors
          duration-300
          group-hover:text-white
        "
      >
        {label}
      </span>
    </div>

    {arrow && (
      <ChevronRight
        size={18}
        className="
          -translate-x-[5px]
          text-orange-400
          opacity-0
          transition-all
          duration-300
          group-hover:translate-x-0
          group-hover:opacity-100
        "
      />
    )}
  </a>
);


// ================================
// LINKS DESKTOP
// ================================

const navLinks = [
  {
    name: 'Inicio',
    href: '/',
  },
  {
    name: 'Galería',
    href: '/galeria',
  },
  {
    name: 'Cocinas',
    href: '/cocinas',
  },
  {
    name: 'Clósets',
    href: '/closets',
  },
  {
    name: 'Centros de TV',
    href: '/centros-de-tv',
  },
  {
    name: 'Remodelaciones',
    href: '/remodelaciones',
  },
  {
    name: 'Cotizar',
    href: '/#cotizar',
  },
  
];


// ================================
// NAVBAR
// ================================

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
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


  // BLOQUEAR SCROLL CUANDO ABRE MENÚ
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
      {/* ================================
          NAVBAR PRINCIPAL
      ================================= */}

      <nav
        className={`
          absolute
          z-50
          w-full
          text-white
          transition-all
          duration-500
          ${
            scrolled
              ? 'bg-black/60 py-1 shadow-lg backdrop-blur-md'
              : 'bg-black py-3'
          }
        `}
      >
        <div className="mx-auto max-w-[1584px] px-6 md:px-12">

          <div className="flex h-8 items-center justify-between md:h-8">

            {/* LOGO */}
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="
                  font-display
                  text-sm
                  font-bold
                  uppercase
                  tracking-[0.15em]
                  md:text-base
                "
              >
                Cocinas Modernas
              </Link>
            </div>


            {/* ================================
                MENÚ DESKTOP
            ================================= */}

            <div className="hidden lg:block">

              <div
                className="
                  flex
                  items-center
                  space-x-8
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.18em]
                  xl:space-x-10
                "
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="
                      relative
                      whitespace-nowrap

                      transition-colors
                      duration-300

                      hover:text-orange-400

                      after:absolute
                      after:left-0
                      after:-bottom-1
                      after:h-[1px]
                      after:w-0
                      after:bg-orange-400
                      after:transition-all
                      after:duration-300

                      hover:after:w-full
                    "
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

            </div>


            {/* ================================
                BOTÓN MOBILE
            ================================= */}

            <div className="flex items-center lg:hidden">

              <button
                onClick={() => setIsOpen(true)}
                aria-label="Abrir menú"
                className="
                  p-2
                  text-white
                  transition-colors
                  duration-300
                  hover:text-orange-400
                "
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


      {/* ================================
          MENÚ MOBILE
      ================================= */}

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">

          {/* OVERLAY */}
          <div
            className="
              absolute
              inset-0
              bg-black/50
              backdrop-blur-sm
            "
            onClick={() => setIsOpen(false)}
          />


          {/* SIDEBAR */}
          <div
            className="
              relative
              flex
              h-full
              w-[85%]
              max-w-[380px]
              flex-col

              border-l
              border-white/5

              bg-[#121212]/95

              p-8
              text-white

              shadow-2xl
              backdrop-blur-2xl
            "
          >

            {/* CERRAR */}
            <div className="mb-12 flex justify-end">

              <button
                onClick={() => setIsOpen(false)}
                aria-label="Cerrar menú"
                className="
                  transition-transform
                  duration-300
                  hover:rotate-90
                "
              >
                <X className="h-9 w-9 stroke-[1.2]" />
              </button>

            </div>


            {/* ================================
                NAVEGACIÓN MOBILE
            ================================= */}

            <nav className="flex flex-1 flex-col gap-5 overflow-y-auto">

              <NavItem
                icon={Home}
                label="Inicio"
                href="/"
                onClick={() => setIsOpen(false)}
              />

              <NavItem
                icon={Images}
                label="Galería"
                href="/galeria"
                onClick={() => setIsOpen(false)}
              />

              <NavItem
                icon={LayoutGrid}
                label="Cocinas"
                href="/cocinas"
                onClick={() => setIsOpen(false)}
              />

              <NavItem
                icon={DoorOpen}
                label="Clósets"
                href="/closets"
                onClick={() => setIsOpen(false)}
              />

              <NavItem
                icon={Monitor}
                label="Centros de TV"
                href="/centros-de-tv"
                onClick={() => setIsOpen(false)}
              />

              <NavItem
                icon={PaintRoller}
                label="Remodelaciones"
                href="/remodelaciones"
                onClick={() => setIsOpen(false)}
              />

              <NavItem
              icon={Mail}
              label="Cotizar"
              href="/#cotizar"
              onClick={() => setIsOpen(false)}
              />


              {/* SEPARADOR */}
              <div className="my-6 h-[1px] bg-white/10" />


              {/* CONTACTO */}
              <p
                className="
                  mb-2
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-orange-400
                "
              >
                Contáctanos
              </p>


              <div className="flex flex-col gap-6">

                <SocialItem
                  icon={FaInstagram}
                  label="Instagram"
                  href="#"
                />

                <SocialItem
                  icon={FaFacebookF}
                  label="Facebook"
                  href="#"
                />

                <SocialItem
                  icon={FaWhatsapp}
                  label="WhatsApp"
                  href="https://wa.me/50768414434?text=Hola%2C%20quisiera%20cotizar%20un%20trabajo%20de%20ebanister%C3%ADa."
                  arrow
                />

              </div>

            </nav>


            {/* FOOTER MOBILE */}
            <div
              className="
                mt-auto
                pt-10
                text-[10px]
                uppercase
                tracking-widest
                text-gray-500
              "
            >
              Arraiján, Panamá Oeste
            </div>

          </div>
        </div>
      )}
    </>
  );
}