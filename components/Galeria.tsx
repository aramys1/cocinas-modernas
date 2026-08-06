import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    title: 'Cocinas',
    description: 'Diseños funcionales y modernos hechos a la medida.',
    image: '/process.png',
    href: '/GalleryHero.tsx',
  },
  {
    title: 'Closets',
    description: 'Organización inteligente y acabados de alta calidad.',
    image: '/closet.png',
    href: '/closets',
  },
  {
    title: 'Centros de TV',
    description: 'Diseños personalizados que transforman tu espacio.',
    image: '/galeria-tv.jpeg',
    href: '/tv',
  },
  {
    title: 'Remodelaciones',
    description: 'Renovamos tus espacios con estilo y funcionalidad.',
    image: '/galeria-remodelaciones.jpeg',
    href: '/remodelaciones',
  },
];

export default function GalleryPreview() {
  return (
    <section className="py-28 bg-white">

      <div className="max-w-[1584px] mx-auto px-6 md:px-12">

        {/* HEADER */}
        <div className="text-center mb-20">

          <h2 className="text-5xl md:text-5xl font-bold uppercase text-black">
            Galería de proyectos
          </h2>

          <div className="w-24 h-[3px] bg-[#D9B37A] mx-auto mt-5 mb-8" />

          <p className="max-w-3xl mx-auto text-gray-600 text-base md:text-lg">
            Explora nuestras últimas instalaciones, donde la precisión técnica y
            los acabados de lujo se unen para crear espacios únicos.
          </p>

        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">

          {categories.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >

              {/* FOTO */}
              <div className="relative h-[260px] overflow-hidden">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />

              </div>

              {/* CONTENIDO */}
              <div className="p-6">

                <div className="flex items-start justify-between gap-4">

                  <div>

                    <h3 className="text-2xl font-bold text-black mb-2">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>

                  </div>

                  <div className="w-12 h-12 rounded-full bg-[#D9B37A] flex items-center justify-center flex-shrink-0 group-hover:translate-x-1 transition-transform">
                    <ArrowRight
                      size={20}
                      className="text-white"
                    />
                  </div>

                </div>

              </div>

            </Link>
          ))}

        </div>

      </div>

    </section>
  );
}