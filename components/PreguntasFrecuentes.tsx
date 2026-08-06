'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: '¿Cuánto tiempo toma un proyecto?',
    answer:
      'La duración depende del tamaño del proyecto y de la disponibilidad del cliente. En la mayoría de los casos, una cocina residencial, un clóset o un centro de entretenimiento pueden completarse en un solo día de trabajo, incluyendo la instalación de muebles, electrodomésticos y fregador. Esto permite minimizar las interrupciones y mantener la comodidad del cliente durante el proceso.',
  },
  {
    question: '¿Qué materiales utilizan en sus muebles?',
    answer:
      'Trabajamos principalmente con aglomerado de melamina hidrófuga de alta calidad, ideal para ambientes residenciales por su resistencia y durabilidad. Para los sobres ofrecemos opciones en cuarzo y granito, materiales reconocidos por su elegancia, resistencia al uso diario y fácil mantenimiento.',
  },
  {
    question: '¿Qué áreas y servicios abarcan?',
    answer:
      'Realizamos fabricación e instalación de cocinas, clósets, centros de entretenimiento y mobiliario personalizado. Además, podemos incluir trabajos complementarios como instalación de electrodomésticos, plomería básica, electricidad básica, albañilería, revestimientos, baldosas y acabados necesarios para entregar un proyecto integral.',
  },
  {
    question: '¿Trabajan con diseños o renders previos?',
    answer:
      'Sí. Dependiendo del proyecto, podemos desarrollar propuestas visuales y renders para que puedas visualizar cómo lucirá el espacio antes de iniciar la fabricación. Esto facilita la toma de decisiones y permite realizar ajustes antes de la producción.',
  },
  {
    question: '¿En qué zonas trabajan?',
    answer:
      'Brindamos servicio en todo Panamá. Hemos desarrollado proyectos en diversas provincias del país, aunque la disponibilidad puede variar según la ubicación y el tamaño del proyecto.',
  },
  {
    question: '¿Ofrecen garantía?',
    answer:
      'Sí. Nuestros trabajos incluyen garantía por defectos de fabricación en herrajes y componentes instalados. Si se presenta algún inconveniente relacionado con materiales o fabricación dentro del período de garantía, realizaremos la revisión correspondiente.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#F5F5F5] py-20 md:py-28">
      <div className="max-w-[1584px] mx-auto px-6 md:px-16 lg:px-24">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold uppercase text-black mb-5 drop-shadow-sm">
            Preguntas Frecuentes
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto">
            Encuentra respuestas rápidas a las dudas más comunes sobre nuestros
            materiales, tiempos de entrega y servicios.
          </p>
        </div>

        {/* FAQ GRID */}
        <div className="grid md:grid-cols-2 gap-5">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#EFE7DA] rounded-2xl overflow-hidden shadow-sm transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between text-left px-6 py-5"
              >
                <span className="font-semibold text-black pr-4">
                  {faq.question}
                </span>

                <div className="w-9 h-9 rounded-full bg-[#D9B37A] flex items-center justify-center flex-shrink-0">
                  {openIndex === index ? (
                    <Minus size={18} className="text-white" />
                  ) : (
                    <Plus size={18} className="text-white" />
                  )}
                </div>
              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}