import Link from 'next/link';

export default function GalleryHero() {
  return (
    <section className="relative h-[50vh] md:h-[60vh] flex items-center">

      {/* Imagen de fondo */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/galeria-hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-[1584px] mx-auto px-6 md:px-16 lg:px-24 w-full">

        <div className="max-w-3xl">

          <p className="text-[#D9B37A] uppercase tracking-[0.25em] text-sm font-semibold mb-4">
            Nuestros proyectos
          </p>

          <h1 className="text-white text-4xl md:text-6xl font-bold mb-6">
            Galería de Proyectos
          </h1>

          <p className="text-white/85 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
            Descubre cocinas, clósets, centros de entretenimiento y
            remodelaciones realizadas por nuestro equipo en todo Panamá.
          </p>

          <Link
            href="#proyectos"
            className="inline-flex items-center bg-white text-black px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300"
          >
            Ver proyectos
          </Link>

        </div>

      </div>
    </section>
  );
}