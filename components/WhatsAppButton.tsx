import { siteConfig, whatsappLink } from '@/lib/site-config';

import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  const whatsappUrl = whatsappLink(
    'Hola, quisiera cotizar un trabajo de ebanistería.',
  );

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="group fixed bottom-5 right-5 z-[90] flex items-center justify-center gap-3 rounded-full bg-[#16833E] text-white w-14 h-14 shadow-lg shadow-black/20 transition-all duration-300 hover:scale-105 hover:shadow-xl md:w-auto md:h-auto md:px-5 md:py-3"
    >
      <FaWhatsapp className="h-7 w-7 shrink-0" />

      {/* Texto visible solo en tablet/escritorio */}
      <div className="hidden md:flex md:flex-col md:items-start md:leading-tight">
        <span className="text-sm font-semibold">Cotizar por WhatsApp</span>

        <span className="mt-1 text-xs text-white/80">{siteConfig.phone}</span>
      </div>
    </a>
  );
}
