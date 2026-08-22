import Link from 'next/link';
import Benefits from '@/components/Benefits';
import Process from '@/components/Process';
import Galeria from '@/components/Galeria';
import Materials from '@/components/Materials';
import PreguntasFrecuentes from '@/components/PreguntasFrecuentes';
import Cotizar from '@/components/Cotizar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden">

        {/* IMAGEN DE FONDO */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/cocina-gris-hero.png')",
          }}
        />

        {/* DEGRADADO DE IZQUIERDA A DERECHA */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.88) 25%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.12) 75%, rgba(0,0,0,0) 100%)',
          }}
        />

        {/* CONTENIDO DEL HERO */}
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="w-full max-w-[1584px] mx-auto px-6 md:px-12">

            <div className="max-w-3xl">

              {/* TÍTULO */}
              <h1
                className="
                  text-white
                  font-serif
                  font-semibold
                  leading-[1.05]
                  tracking-tight
                  text-5xl
                  sm:text-5xl
                  md:text-5xl
                  lg:text-6xl
                  max-w-3xl
                "
              >
                Diseño y Fabricación
                <span className="block">
                  de Muebles a Medida
                </span>
              </h1>

              {/* LÍNEA DECORATIVA */}
              <div className="mt-8 mb-8 w-20 h-[3px] bg-white" />

              {/* TEXTO */}
              <p className="text-white/85 text-lg md:text-2xl leading-relaxed max-w-xl">
                Diseñamos y fabricamos muebles a medida para crear espacios
                únicos, funcionales y adaptados a tu estilo.
              </p>

              {/* BOTÓN */}
              <div className="mt-10">
                <Link
                  href="https://wa.me/50768414434"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    bg-white
                    text-black
                    px-8
                    py-4
                    rounded-xl
                    text-base
                    md:text-lg
                    font-semibold
                    transition-all
                    duration-300
                    hover:bg-neutral-200
                    hover:scale-[1.02]
                  "
                >
                  Cotizar mi proyecto
                </Link>
              </div>

            </div>
          </div>
        </div>

      </section>

      {/* SECCIONES */}
      <Galeria />
      <Benefits />
      <Process />
      <Materials />
      <PreguntasFrecuentes />
      <Cotizar />
      <Footer />

    </main>
  );
}