import Link from 'next/link';

export default function NotFound() {
  return (
    <main
      id="contenido"
      tabIndex={-1}
      className="flex min-h-[75svh] items-center bg-[#FAFAFA] px-6 pb-20 pt-32"
    >
      <div className="mx-auto max-w-2xl text-center">
        <p className="eyebrow">Error 404</p>
        <h1 className="page-title mt-4">Este espacio aún no existe</h1>
        <p className="mt-6 text-lg text-gray-600">
          La página que buscas no está disponible. Puedes explorar nuestros
          proyectos o contarnos qué tienes en mente.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Link className="button-gold" href="/">
            Inicio
          </Link>
          <Link className="button-outline" href="/galeria">
            Galería
          </Link>
          <Link className="button-outline" href="/#cotizar">
            Cotizar
          </Link>
        </div>
      </div>
    </main>
  );
}
