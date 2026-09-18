import Link from 'next/link';
import { Phone, MapPin, MessageCircle } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { siteConfig } from '@/lib/site-config';
import { projectCategories } from '@/data/projects';

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white">
      <div className="mx-auto max-w-[1584px] px-6 pb-28 pt-16 md:px-12">
        <div className="grid gap-12 sm:grid-cols-2 xl:grid-cols-4">
          <div>
            <p className="mb-4 font-display text-xl font-bold uppercase tracking-wider">
              {siteConfig.name}
            </p>
            <p className="leading-relaxed text-gray-400">
              Diseño, fabricación e instalación de muebles a medida en todo
              Panamá.
            </p>
          </div>
          <div>
            <h2 className="mb-5 font-bold uppercase tracking-wider">
              Contacto
            </h2>
            <div className="space-y-4 text-gray-300">
              <a
                href={siteConfig.phoneHref}
                className="flex min-h-11 items-center gap-3"
              >
                <Phone size={18} className="shrink-0" />
                {siteConfig.phone}
              </a>
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-11 items-center gap-3"
              >
                <MessageCircle size={18} className="shrink-0" />
                Escribir por WhatsApp
              </a>
              <p className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 shrink-0" />
                <span>
                  {siteConfig.location}
                  <br />
                  <span className="text-sm">{siteConfig.serviceArea}</span>
                </span>
              </p>
            </div>
          </div>
          <nav aria-label="Servicios">
            <h2 className="mb-5 font-bold uppercase tracking-wider">
              Servicios
            </h2>
            <div className="flex flex-col gap-3 text-gray-300">
              {Object.entries(projectCategories).map(([slug, label]) => (
                <Link
                  key={slug}
                  href={`/${slug}`}
                  className="w-fit py-1 hover:text-[#D9B37A]"
                >
                  {label}
                </Link>
              ))}
            </div>
          </nav>
          <div>
            <h2 className="mb-5 font-bold uppercase tracking-wider">
              Síguenos
            </h2>
            <div className="flex gap-4">
              {[
                {
                  label: 'Instagram',
                  href: siteConfig.social.instagram,
                  icon: FaInstagram,
                },
                {
                  label: 'Facebook',
                  href: siteConfig.social.facebook,
                  icon: FaFacebookF,
                },
                {
                  label: 'WhatsApp',
                  href: siteConfig.whatsapp,
                  icon: FaWhatsapp,
                },
              ].map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[#D9B37A] hover:text-black"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
        <p className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
