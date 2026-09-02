import { NextResponse } from 'next/server';
import { Resend } from 'resend';


const allowedProjects = new Set([
  'Cocina residencial',
  'Clóset residencial',
  'Centro de entretenimiento',
  'Remodelación residencial',
  'Mobiliario comercial o empresarial',
  'Remodelación comercial o empresarial',
  'Panelados, oficinas o áreas corporativas',
  'Otro mueble a medida',
]);


export async function POST(request: Request) {
  try {

    /* =================================
       TAMAÑO MÁXIMO DE LA SOLICITUD
    ================================= */

    const contentLength = Number(
      request.headers.get('content-length') ?? 0
    );

    if (contentLength > 20_000) {
      return NextResponse.json(
        {
          error: 'Solicitud demasiado grande.',
        },
        {
          status: 413,
        }
      );
    }


    const body = await request.json();


    /* =================================
       NORMALIZAR DATOS
    ================================= */

    const nombre = cleanString(body.nombre);
    const telefono = cleanString(body.telefono);
    const email = cleanString(body.email);
    const proyecto = cleanString(body.proyecto);
    const ubicacion = cleanString(body.ubicacion);
    const empresa = cleanString(body.empresa);
    const mensaje = cleanString(body.mensaje);

    const website = cleanString(body.website);

    const formStartedAt =
      Number(body.formStartedAt);


    /* =================================
       HONEYPOT
    ================================= */

    // Los usuarios reales nunca ven este campo.
    // Si viene lleno, probablemente fue un bot.
    //
    // Respondemos como si todo hubiese salido bien
    // para no indicarle al bot que fue detectado.
    if (website) {
      return NextResponse.json(
        {
          success: true,
        },
        {
          status: 200,
        }
      );
    }


    /* =================================
       ENVÍO DEMASIADO RÁPIDO
    ================================= */

    if (
      !Number.isFinite(formStartedAt) ||
      Date.now() - formStartedAt < 2500
    ) {
      return NextResponse.json(
        {
          error: 'Solicitud no válida.',
        },
        {
          status: 400,
        }
      );
    }


    /* =================================
       CAMPOS OBLIGATORIOS
    ================================= */

    if (
      !nombre ||
      !telefono ||
      !proyecto ||
      !ubicacion ||
      !mensaje
    ) {
      return NextResponse.json(
        {
          error: 'Faltan campos obligatorios.',
        },
        {
          status: 400,
        }
      );
    }


    /* =================================
       VALIDACIÓN DE LONGITUDES
    ================================= */

    if (
      nombre.length < 2 ||
      nombre.length > 80
    ) {
      return invalidRequest();
    }

    if (
      telefono.length < 7 ||
      telefono.length > 25
    ) {
      return invalidRequest();
    }

    if (
      ubicacion.length < 2 ||
      ubicacion.length > 120
    ) {
      return invalidRequest();
    }

    if (
      empresa.length > 120
    ) {
      return invalidRequest();
    }

    if (
      mensaje.length < 10 ||
      mensaje.length > 2000
    ) {
      return invalidRequest();
    }

    if (
      email.length > 120
    ) {
      return invalidRequest();
    }


    /* =================================
       VALIDACIÓN DEL TELÉFONO
    ================================= */

    const phoneRegex =
      /^[0-9+\s().-]{7,25}$/;

    if (!phoneRegex.test(telefono)) {
      return NextResponse.json(
        {
          error:
            'El número de teléfono no es válido.',
        },
        {
          status: 400,
        }
      );
    }


    /* =================================
       VALIDACIÓN DEL EMAIL
    ================================= */

    if (email) {
      const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(email)) {
        return NextResponse.json(
          {
            error:
              'El correo electrónico no es válido.',
          },
          {
            status: 400,
          }
        );
      }
    }


    /* =================================
       TIPO DE PROYECTO PERMITIDO
    ================================= */

    if (!allowedProjects.has(proyecto)) {
      return NextResponse.json(
        {
          error:
            'El tipo de proyecto no es válido.',
        },
        {
          status: 400,
        }
      );
    }


    /* =================================
       VARIABLES DEL SERVIDOR
    ================================= */

    const resendApiKey =
      process.env.RESEND_API_KEY;

    const contactEmail =
      process.env.CONTACT_EMAIL;


    if (
      !resendApiKey ||
      !contactEmail
    ) {
      console.error(
        'Faltan variables de entorno para Resend.'
      );

      return NextResponse.json(
        {
          error:
            'El servicio de correo no está disponible.',
        },
        {
          status: 500,
        }
      );
    }


    const resend =
      new Resend(resendApiKey);


    /* =================================
       ENVÍO DEL CORREO
    ================================= */

    const { error } =
      await resend.emails.send({

        from:
          'Cotizaciones Web <onboarding@resend.dev>',

        to:
          contactEmail,

        subject:
          `Nueva cotización - ${proyecto}`,

        replyTo:
          email || undefined,

        html: `
          <div
            style="
              max-width: 650px;
              margin: 0 auto;
              padding: 32px;
              font-family: Arial, sans-serif;
              color: #171717;
            "
          >

            <h1
              style="
                margin-bottom: 8px;
                font-size: 26px;
              "
            >
              Nueva solicitud de cotización
            </h1>

            <p
              style="
                margin-top: 0;
                margin-bottom: 30px;
                color: #666;
              "
            >
              Se recibió una nueva solicitud desde el sitio web de Cocinas Modernas.
            </p>


            <table
              style="
                width: 100%;
                border-collapse: collapse;
              "
            >

              <tr>
                <td
                  style="
                    padding: 10px 0;
                    font-weight: bold;
                  "
                >
                  Nombre
                </td>

                <td style="padding: 10px 0;">
                  ${escapeHtml(nombre)}
                </td>
              </tr>


              <tr>
                <td
                  style="
                    padding: 10px 0;
                    font-weight: bold;
                  "
                >
                  Celular / WhatsApp
                </td>

                <td style="padding: 10px 0;">
                  ${escapeHtml(telefono)}
                </td>
              </tr>


              <tr>
                <td
                  style="
                    padding: 10px 0;
                    font-weight: bold;
                  "
                >
                  Correo
                </td>

                <td style="padding: 10px 0;">
                  ${
                    email
                      ? escapeHtml(email)
                      : 'No proporcionado'
                  }
                </td>
              </tr>


              <tr>
                <td
                  style="
                    padding: 10px 0;
                    font-weight: bold;
                  "
                >
                  Tipo de proyecto
                </td>

                <td style="padding: 10px 0;">
                  ${escapeHtml(proyecto)}
                </td>
              </tr>


              <tr>
                <td
                  style="
                    padding: 10px 0;
                    font-weight: bold;
                  "
                >
                  Ubicación
                </td>

                <td style="padding: 10px 0;">
                  ${escapeHtml(ubicacion)}
                </td>
              </tr>


              <tr>
                <td
                  style="
                    padding: 10px 0;
                    font-weight: bold;
                  "
                >
                  Empresa / organización
                </td>

                <td style="padding: 10px 0;">
                  ${
                    empresa
                      ? escapeHtml(empresa)
                      : 'No aplica'
                  }
                </td>
              </tr>

            </table>


            <div
              style="
                margin-top: 30px;
                padding: 22px;
                background: #f5f5f5;
                border-radius: 12px;
              "
            >

              <strong>
                Detalles del proyecto
              </strong>

              <p
                style="
                  margin-bottom: 0;
                  line-height: 1.6;
                  white-space: pre-line;
                "
              >
                ${escapeHtml(mensaje)}
              </p>

            </div>


            <div
              style="
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #ddd;
                color: #777;
                font-size: 13px;
              "
            >
              Solicitud enviada desde el formulario de Cocinas Modernas.
            </div>

          </div>
        `,
      });


    if (error) {
      console.error(
        'Error de Resend:',
        error
      );

      return NextResponse.json(
        {
          error:
            'No se pudo enviar la cotización.',
        },
        {
          status: 500,
        }
      );
    }


    return NextResponse.json(
      {
        success: true,
      },
      {
        status: 200,
      }
    );

  } catch (error) {

    console.error(
      'Error al procesar cotización:',
      error
    );

    return NextResponse.json(
      {
        error:
          'Ocurrió un error al procesar la solicitud.',
      },
      {
        status: 500,
      }
    );
  }
}


/* =================================
   NORMALIZAR TEXTO
================================= */

function cleanString(
  value: unknown
) {
  if (
    typeof value !== 'string'
  ) {
    return '';
  }

  return value.trim();
}


/* =================================
   RESPUESTA DE VALIDACIÓN
================================= */

function invalidRequest() {
  return NextResponse.json(
    {
      error:
        'Los datos enviados no son válidos.',
    },
    {
      status: 400,
    }
  );
}


/* =================================
   PROTECCIÓN DEL HTML
================================= */

function escapeHtml(
  value: unknown
) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll(
      "'",
      '&#039;'
    );
}