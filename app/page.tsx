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
      <section className="relative min-h-screen">

        {/* Fondo */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/cocina-gris-hero.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Contenido */}
        <div className="relative z-10 max-w-[1584px] mx-auto px-6 md:px-12">
          <section className="flex flex-col justify-center min-h-screen max-w-3xl">
            
            <h1 className="text-4xl md:text-4xl font-bold text-white leading-tight uppercase tracking-wide max-w-xl">
              Diseño y Fabricación de Muebles a Medida
            </h1>

            <div className="mt-12">
              <Link 
                href="https://wa.me/50768414434" 
                className="bg-[#E0E0E0] text-black px-8 py-4 rounded-xl text-lg font-bold hover:bg-white transition-all  inline-block"
              >
                Cotizar mi proyecto
              </Link>
            </div>

          </section>
        </div>

      </section>

      {/* BENEFITS */}
      <Benefits />
      <Process />
      <Galeria />
      <Materials />
      <PreguntasFrecuentes />
      <Cotizar />
      <Footer />
    </main>
  );
}