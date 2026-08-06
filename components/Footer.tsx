import Link from 'next/link';
import {
  Phone,
  MapPin,
  MessageCircle,
} from 'lucide-react';

import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white">

      <div className="max-w-[1584px] mx-auto px-6 md:px-16 lg:px-24 py-16">

        <div className="grid md:grid-cols-4 gap-12">

          {/* Marca */}
          <div>
            <h3 className="text-xl font-bold uppercase tracking-wider mb-4">
              Cocinas Modernas
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Diseño, fabricación e instalación de muebles a medida en todo Panamá.
            </p>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-bold mb-5 uppercase tracking-wider">
              Contacto
            </h4>

            <div className="space-y-4 text-gray-400">

              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>+507 6841-4434</span>
              </div>

              <div className="flex items-center gap-3">
                <MessageCircle size={18} />
                <span>WhatsApp: 6841-4434</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} />
                <span>Panamá Oeste, Panamá</span>
              </div>

            </div>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="font-bold mb-5 uppercase tracking-wider">
              Servicios
            </h4>

            <div className="flex flex-col gap-3 text-gray-400">
              <Link href="/cocinas">Cocinas</Link>
              <Link href="/closets">Clósets</Link>
              <Link href="/tv">Centros de TV</Link>
              <Link href="/remodelaciones">Remodelaciones</Link>
            </div>
          </div>

          {/* Redes */}
          <div>
            <h4 className="font-bold mb-5 uppercase tracking-wider">
              Síguenos
            </h4>

            <div className="flex gap-4">

              <a
                href="https://www.instagram.com/cosinasmodernaspanama?igsh=OHpkNXR3cG9wa2N0"
                target="_blank"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D9B37A] transition-colors"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.facebook.com/share/1LsNDZejCg/"
                target="_blank"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D9B37A] transition-colors"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://wa.me/50768414434"
                target="_blank"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D9B37A] transition-colors"
              >
                <FaWhatsapp />
              </a>

            </div>
          </div>

        </div>

        {/* Línea inferior */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Cocinas Modernas. Todos los derechos reservados.
        </div>

      </div>
    </footer>
  );
}