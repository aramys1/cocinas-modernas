import Image from 'next/image';

import {
  Droplets,
  Square,
  Gem,
  Lightbulb,
  Wrench,
  Boxes,
} from 'lucide-react';

const materials = [
  {
    title: 'Aglomerado Hidrófugo',
    description:
      'Tableros resistentes a la humedad ideales para cocinas y baños.',
    image: '/aglomerado-hidrofugo.png',
    icon: Droplets,
  },
  {
    title: 'Sobres de granito',
    description:
      'Piedra natural de alta resistencia y elegancia.',
    image: '/granito.png',
    icon: Square,
  },
  {
    title: 'Sobres de cuarzo',
    description:
      'Superficies modernas con acabados premium.',
    image: '/cuarzo.png',
    icon: Gem,
  },
  {
    title: 'Luces LED decorativas',
    description:
      'Iluminación funcional para crear ambientes únicos.',
    image: '/luces-led.png',
    icon: Lightbulb,
  },
  {
    title: 'Herrajes premium',
    description:
      'Bisagras y accesorios de alta calidad.',
    image: '/herraje.png',
    icon: Wrench,
  },
  {
    title: 'Espacios funcionales',
    description:
      'Soluciones inteligentes para aprovechar cada rincón.',
    image: '/espacios-funcionales.png',
    icon: Boxes,
  },
];

export default function Materials() {
  return (
    <section className="bg-[#f8f8f8] py-24">

      <div className="max-w-[1584px] mx-auto px-6 md:px-16 lg:px-24">

        {/* HEADER */}
        <div className="text-center mb-16">

          <h2 className="text-3xl md:text-5xl font-bold uppercase text-black mb-5">
            Materiales y acabados
          </h2>

          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Seleccionamos materiales premium para ofrecer muebles duraderos,
            funcionales y con acabados impecables.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-5">

          {materials.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
            >

              {/* IMAGE */}
              <div className="relative h-[170px] overflow-hidden rounded-t-3xl">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/10" />
              </div>

              {/* ICON */}
              <div className="relative flex justify-center">

                <div className="absolute -top-7 w-14 h-14 rounded-full bg-[#D9B37A] flex items-center justify-center shadow-lg border-4 border-white z-10">

                  <item.icon
                    size={24}
                    strokeWidth={1.8}
                    className="text-black"
                  />
                </div>
              </div>

              {/* CONTENT */}
              <div className="pt-12 pb-8 px-5 text-center">

                <h3 className="text-lg font-bold text-black mb-3 leading-tight">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}