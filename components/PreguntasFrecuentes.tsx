import JsonLd from './JsonLd';

const faqs = [
  {
    question: '¿Cuánto tiempo toma un proyecto?',
    answer:
      'La duración depende del tamaño y alcance del proyecto. Cuando el espacio está preparado y todos los elementos acordados están disponibles, normalmente buscamos instalar una cocina residencial, un clóset o un centro de entretenimiento en un día. El diseño, la fabricación y los trabajos adicionales requieren su propia planificación.',
  },
  {
    question: '¿Qué materiales utilizan en sus muebles?',
    answer:
      'Trabajamos principalmente con aglomerado de melamina hidrófugo y diferentes opciones de colores, acabados y herrajes. Para los sobres de cocina se pueden utilizar cuarzo o granito según el proyecto.',
  },
  {
    question: '¿Qué áreas y servicios abarcan?',
    answer:
      'Diseñamos, fabricamos e instalamos cocinas, clósets, centros de entretenimiento y mobiliario residencial, comercial y empresarial a medida. También realizamos remodelaciones residenciales, comerciales e institucionales con los trabajos complementarios acordados para cada proyecto.',
  },
  {
    question: '¿Trabajan con diseños o renders previos?',
    answer:
      'Sí. Cuando corresponde, podemos preparar diseños o renders para visualizar la propuesta antes de fabricar. Pueden tener un costo adicional según el proyecto. En las cocinas, el cliente debe aprobar el diseño antes de iniciar la fabricación.',
  },
  {
    question: '¿En qué zonas trabajan?',
    answer:
      'Estamos en Panamá Oeste y brindamos servicio en todo Panamá. Evaluamos las condiciones y el alcance de cada proyecto durante la cotización.',
  },
  {
    question: '¿Ofrecen garantía?',
    answer:
      'Ofrecemos 3 meses de garantía por defectos relacionados con nuestra instalación. No cubre mal uso, productos de limpieza inadecuados, sustancias abrasivas, otras causas externas ni trabajos realizados por terceros.',
  },
];

export default function PreguntasFrecuentes() {
  return (
    <section className="bg-[#F5F5F5] py-20 md:py-24">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map(({ question, answer }) => ({
            '@type': 'Question',
            name: question,
            acceptedAnswer: { '@type': 'Answer', text: answer },
          })),
        }}
      />
      <div className="mx-auto max-w-[1584px] px-6 md:px-12">
        <div className="mb-14 text-center">
          <h2 className="section-title mb-5">Preguntas frecuentes</h2>
          <p className="mx-auto max-w-2xl leading-relaxed text-gray-600">
            Encuentra respuestas a las dudas más comunes sobre nuestros
            materiales, tiempos de instalación y servicios.
          </p>
        </div>
        <div className="grid items-start gap-5 md:grid-cols-2">
          {faqs.map(({ question, answer }) => (
            <details
              key={question}
              className="group overflow-hidden rounded-2xl bg-[#EFE7DA] shadow-sm"
            >
              <summary className="flex min-h-16 list-none items-center justify-between gap-4 px-6 py-5 font-semibold text-black">
                {question}
                <span
                  aria-hidden="true"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#D9B37A] text-xl transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="px-6 pb-6 leading-relaxed text-gray-700">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
