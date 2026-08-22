import Link from 'next/link';

export default function CTASection() {
  const phoneNumber = '50768414434';

  const message = encodeURIComponent(
    'Hola, quisiera cotizar un trabajo de ebanistería.'
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  return (
    <section id="cotizar" className="bg-[#D9B37A] py-20">
      <div className="max-w-[1584px] mx-auto px-6 md:px-16 lg:px-24 text-center">

        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          ¿Listo para transformar tu espacio?
        </h2>

        <p className="text-white/90 text-lg max-w-3xl mx-auto mb-10">
          Solicita una cotización personalizada y recibe asesoría para
          diseñar la cocina, clóset o centro de entretenimiento ideal para tu hogar.
        </p>

        <Link
        
          href={whatsappUrl}
          className="inline-flex items-center justify-center bg-white text-black font-semibold px-10 py-5 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg"
        >
          Cotizar mi proyecto
        </Link>

      </div>
    </section>
  );
}