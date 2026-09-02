import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      nombre,
      telefono,
      email,
      proyecto,
      ubicacion,
      empresa,
      mensaje,
    } = body;

    /* VALIDACIÓN */
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

    /* ENVÍO DEL CORREO */
    const { error } = await resend.emails.send({
      from: 'Cotizaciones Web <onboarding@resend.dev>',

      to: process.env.CONTACT_EMAIL!,

      subject: `Nueva cotización - ${proyecto}`,

      replyTo: email || undefined,

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
              <td style="padding: 10px 0; font-weight: bold;">
                Nombre
              </td>

              <td style="padding: 10px 0;">
                ${escapeHtml(nombre)}
              </td>
            </tr>


            <tr>
              <td style="padding: 10px 0; font-weight: bold;">
                Celular / WhatsApp
              </td>

              <td style="padding: 10px 0;">
                ${escapeHtml(telefono)}
              </td>
            </tr>


            <tr>
              <td style="padding: 10px 0; font-weight: bold;">
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
              <td style="padding: 10px 0; font-weight: bold;">
                Tipo de proyecto
              </td>

              <td style="padding: 10px 0;">
                ${escapeHtml(proyecto)}
              </td>
            </tr>


            <tr>
              <td style="padding: 10px 0; font-weight: bold;">
                Ubicación
              </td>

              <td style="padding: 10px 0;">
                ${escapeHtml(ubicacion)}
              </td>
            </tr>


            <tr>
              <td style="padding: 10px 0; font-weight: bold;">
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
      console.error('Error de Resend:', error);

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
   PROTECCIÓN DEL HTML
================================= */

function escapeHtml(value: unknown) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}