'use client';

import { useState } from 'react';
import {
  CheckCircle2,
  LoaderCircle,
  MessageCircle,
  Send,
} from 'lucide-react';

export default function Cotizar() {
  const phoneNumber = '50768414434';

  const whatsappMessage = encodeURIComponent(
    'Hola, quisiera cotizar un proyecto.'
  );

  const whatsappUrl =
    `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setLoading(true);
    setSuccess(false);
    setError('');

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      nombre: formData.get('nombre'),
      telefono: formData.get('telefono'),
      email: formData.get('email'),
      proyecto: formData.get('proyecto'),
      ubicacion: formData.get('ubicacion'),
      empresa: formData.get('empresa'),
      mensaje: formData.get('mensaje'),
    };

    try {
      const response = await fetch('/api/cotizacion', {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('No se pudo enviar la solicitud');
      }

      form.reset();
      setSuccess(true);
    } catch {
      setError(
        'No pudimos enviar tu solicitud. Puedes contactarnos directamente por WhatsApp.'
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="cotizar"
      className="bg-[#D9B37A] py-20 md:py-24"
    >
      <div
        className="
          mx-auto
          grid
          max-w-[1584px]
          grid-cols-1
          gap-14
          px-6
          md:px-16
          lg:grid-cols-[0.8fr_1.2fr]
          lg:gap-20
          lg:px-24
        "
      >

        {/* INFORMACIÓN */}
        <div className="flex flex-col justify-top">

          <p
            className="
              mb-4
              text-sm
              font-semibold
              uppercase
              tracking-[0.25em]
              text-white/80
            "
          >
            Cotiza tu proyecto
          </p>

          <h2
            className="
              max-w-xl
              text-4xl
              font-semibold
              leading-tight
              text-white
              md:text-5xl
            "
            style={{
              fontFamily: 'var(--font-display)',
            }}
          >
            Cuéntanos qué tienes en mente
          </h2>

          <div className="my-7 h-[2px] w-20 bg-white" />

          <p
            className="
              max-w-xl
              text-base
              leading-relaxed
              text-white/90
              md:text-lg
            "
          >
            Envíanos los detalles de tu proyecto y nos
            pondremos en contacto contigo para conocer
            mejor el espacio y preparar una cotización.
          </p>

          <p
            className="
              mt-5
              max-w-xl
              text-sm
              leading-relaxed
              text-white/80
              md:text-base
            "
          >
            Atendemos proyectos residenciales, mobiliario
            a medida y trabajos comerciales o empresariales.
          </p>


          {/* WHATSAPP */}
          <div className="mt-10">

            <p className="mb-4 text-sm font-medium text-white/80">
              ¿Prefieres hablar directamente?
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-3
                rounded-xl
                border
                border-white/40
                px-6
                py-4
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-white
                hover:text-black
              "
            >
              <MessageCircle size={21} />

              Escribir por WhatsApp
            </a>

          </div>

        </div>


        {/* FORMULARIO */}
        <div
          className="
            rounded-3xl
            bg-white
            p-6
            shadow-xl
            sm:p-8
            md:p-10
          "
        >

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            {/* NOMBRE + TELÉFONO */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

              <div>
                <label
                  htmlFor="nombre"
                  className="mb-2 block text-sm font-semibold text-black"
                >
                  Nombre completo *
                </label>

                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Tu nombre"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-neutral-300
                    bg-white
                    px-4
                    py-3.5
                    text-black
                    outline-none
                    transition
                    placeholder:text-neutral-400
                    focus:border-[#B9945E]
                  "
                />
              </div>


              <div>
                <label
                  htmlFor="telefono"
                  className="mb-2 block text-sm font-semibold text-black"
                >
                  Celular / WhatsApp *
                </label>

                <input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="+507 6000-0000"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-neutral-300
                    bg-white
                    px-4
                    py-3.5
                    text-black
                    outline-none
                    transition
                    placeholder:text-neutral-400
                    focus:border-[#B9945E]
                  "
                />
              </div>

            </div>


            {/* EMAIL */}
            <div>

              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-black"
              >
                Correo electrónico
                <span className="ml-2 font-normal text-neutral-400">
                  Opcional
                </span>
              </label>

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="correo@ejemplo.com"
                className="
                  w-full
                  rounded-xl
                  border
                  border-neutral-300
                  bg-white
                  px-4
                  py-3.5
                  text-black
                  outline-none
                  transition
                  placeholder:text-neutral-400
                  focus:border-[#B9945E]
                "
              />

            </div>


            {/* TIPO DE PROYECTO */}
            <div>

              <label
                htmlFor="proyecto"
                className="mb-2 block text-sm font-semibold text-black"
              >
                Tipo de proyecto *
              </label>

              <select
                id="proyecto"
                name="proyecto"
                required
                defaultValue=""
                className="
                  w-full
                  rounded-xl
                  border
                  border-neutral-300
                  bg-white
                  px-4
                  py-3.5
                  text-black
                  outline-none
                  transition
                  focus:border-[#B9945E]
                "
              >
                <option value="" disabled>
                  Selecciona una opción
                </option>

                <option value="Cocina residencial">
                  Cocina residencial
                </option>

                <option value="Clóset residencial">
                  Clóset residencial
                </option>

                <option value="Centro de entretenimiento">
                  Centro de entretenimiento
                </option>

                <option value="Remodelación residencial">
                  Remodelación residencial
                </option>

                <option value="Mobiliario comercial o empresarial">
                  Mobiliario comercial o empresarial
                </option>

                <option value="Remodelación comercial o empresarial">
                  Remodelación comercial o empresarial
                </option>

                <option value="Panelados, oficinas o áreas corporativas">
                  Panelados, oficinas o áreas corporativas
                </option>

                <option value="Otro mueble a medida">
                  Otro mueble a medida
                </option>
              </select>

            </div>


            {/* UBICACIÓN + EMPRESA */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

              <div>

                <label
                  htmlFor="ubicacion"
                  className="mb-2 block text-sm font-semibold text-black"
                >
                  Ubicación del proyecto *
                </label>

                <input
                  id="ubicacion"
                  name="ubicacion"
                  type="text"
                  required
                  placeholder="Ej. Costa del Este, Panamá"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-neutral-300
                    bg-white
                    px-4
                    py-3.5
                    text-black
                    outline-none
                    transition
                    placeholder:text-neutral-400
                    focus:border-[#B9945E]
                  "
                />

              </div>


              <div>

                <label
                  htmlFor="empresa"
                  className="mb-2 block text-sm font-semibold text-black"
                >
                  Empresa / organización
                  <span className="ml-2 font-normal text-neutral-400">
                    Opcional
                  </span>
                </label>

                <input
                  id="empresa"
                  name="empresa"
                  type="text"
                  placeholder="Nombre de la empresa"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-neutral-300
                    bg-white
                    px-4
                    py-3.5
                    text-black
                    outline-none
                    transition
                    placeholder:text-neutral-400
                    focus:border-[#B9945E]
                  "
                />

              </div>

            </div>


            {/* MENSAJE */}
            <div>

              <label
                htmlFor="mensaje"
                className="mb-2 block text-sm font-semibold text-black"
              >
                Cuéntanos sobre tu proyecto *
              </label>

              <textarea
                id="mensaje"
                name="mensaje"
                required
                rows={5}
                placeholder="Ej. Quiero renovar una cocina e incluir muebles aéreos, gavetas y una torre para hornos..."
                className="
                  w-full
                  resize-none
                  rounded-xl
                  border
                  border-neutral-300
                  bg-white
                  px-4
                  py-3.5
                  text-black
                  outline-none
                  transition
                  placeholder:text-neutral-400
                  focus:border-[#B9945E]
                "
              />

            </div>


            {/* MENSAJE DE ÉXITO */}
            {success && (
              <div
                className="
                  flex
                  items-start
                  gap-3
                  rounded-xl
                  bg-green-50
                  p-4
                  text-sm
                  text-green-800
                "
              >
                <CheckCircle2
                  size={20}
                  className="mt-0.5 shrink-0"
                />

                <p>
                  Recibimos tu solicitud correctamente.
                  Nos pondremos en contacto contigo.
                </p>
              </div>
            )}


            {/* ERROR */}
            {error && (
              <div
                className="
                  rounded-xl
                  bg-red-50
                  p-4
                  text-sm
                  text-red-700
                "
              >
                {error}
              </div>
            )}


            {/* BOTÓN */}
            <button
              type="submit"
              disabled={loading}
              className="
                flex
                w-full
                items-center
                justify-center
                gap-3
                rounded-xl
                bg-black
                px-8
                py-4
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-neutral-800
                disabled:cursor-not-allowed
                disabled:opacity-60
              "
            >
              {loading ? (
                <>
                  <LoaderCircle
                    size={20}
                    className="animate-spin"
                  />

                  Enviando...
                </>
              ) : (
                <>
                  <Send size={19} />

                  Solicitar cotización
                </>
              )}
            </button>


            <p className="text-center text-xs leading-relaxed text-neutral-400">
              Al enviar esta solicitud aceptas que nos
              comuniquemos contigo para atender tu cotización.
            </p>

          </form>

        </div>

      </div>
    </section>
  );
}