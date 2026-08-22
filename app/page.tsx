import Link from 'next/link';

import Benefits from '@/components/Benefits';
import Process from '@/components/Process';
import Galeria from '@/components/Galeria';
import Materials from '@/components/Materials';
import PreguntasFrecuentes from '@/components/PreguntasFrecuentes';
import Cotizar from '@/components/Cotizar';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';

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
        <div className="relative z-10 flex min-h-screen items-center">

          <div className="mx-auto w-full max-w-[1584px] px-6 md:px-12">

            <div className="max-w-3xl">

              {/* TÍTULO */}
              <Reveal delay={100}>
                <h1
                  className="
                    max-w-3xl
                    font-serif
                    text-5xl
                    font-semibold
                    leading-[1.05]
                    tracking-tight
                    text-white
                    sm:text-5xl
                    md:text-5xl
                    lg:text-6xl
                  "
                >
                  Diseño y Fabricación

                  <span className="block">
                    de Muebles a Medida
                  </span>
                </h1>
              </Reveal>


              {/* LÍNEA DECORATIVA */}
              <Reveal delay={250}>
                <div className="mb-8 mt-8 h-[3px] w-20 bg-white" />
              </Reveal>


              {/* TEXTO */}
              <Reveal delay={400}>
                <p className="max-w-xl text-lg leading-relaxed text-white/85 md:text-2xl">
                  Diseñamos y fabricamos muebles a medida para crear espacios
                  únicos, funcionales y adaptados a tu estilo.
                </p>
              </Reveal>


              {/* BOTÓN */}
              <Reveal delay={550}>
                <div className="mt-10">

                  <Link
                    href="https://wa.me/50768414434"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      justify-center
                      rounded-xl
                      bg-white
                      px-8
                      py-4
                      text-base
                      font-semibold
                      text-black
                      transition-all
                      duration-300
                      hover:scale-[1.02]
                      hover:bg-neutral-200
                      md:text-lg
                    "
                  >
                    Cotizar mi proyecto
                  </Link>

                </div>
              </Reveal>

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