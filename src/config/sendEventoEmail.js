import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore/lite";

export default async function sendEventoEmail(
  email,
  nombreEvento,
  dia,
  mes,
  año,
  horario,
  lugar
) {
  const collectRef = collection(db, "mail");

  const emailContent = {
    to: email,
    message: {
      subject: ` Confirmación de registro para el evento ${nombreEvento}`,
      text: `
Es un placer para nosotros confirmar tu registro para el evento ${nombreEvento} organizado por 
la OMD. Agradecemos tu interés en participar y nos complace contar con tu 
presencia.
A continuación, te proporcionamos los detalles del evento:
- Nombre del evento: ${nombreEvento}
- Fecha: ${dia} ${mes} ${año} 
- Hora: ${horario}
- Lugar: ${lugar}
Tu registro ha sido procesado con éxito y ahora estás oficialmente inscrito/a para participar en el 
evento. Este será un encuentro emocionante donde podrás disfrutar de charlas inspiradoras, 
oportunidades y compartir conocimientos con otros afiliados y profesionales destacados en el 
campo.
Te recomendamos llegar al evento con suficiente antelación para asegurarte de obtener un buen 
lugar y aprovechar al máximo la experiencia. Si tienes alguna pregunta adicional sobre el evento, el 
programa o cualquier otra cosa relacionada, no dudes en ponerte en contacto con nuestro equipo 
de organización.
Queremos aprovechar esta oportunidad para agradecerte por ser parte de nuestra comunidad y por 
tu continuo apoyo a nuestras actividades. Valoramos tu compromiso y estamos emocionados de 
compartir este evento contigo.
Esperamos que el evento supere tus expectativas y sea una experiencia enriquecedora para ti. ¡Nos 
vemos pronto!
Contactos:
- Teléfono: 555555555
- Correo electrónico: organizacionomd@gmail.com
¡Gracias nuevamente por tu participación y nos vemos en el evento!
¡Saludos cordiales de la organización OMD!
`,
      html: `Es un placer para nosotros confirmar tu registro para el evento ${nombreEvento} organizado por 
la OMD. Agradecemos tu interés en participar y nos complace contar con tu 
presencia.<br />
A continuación, te proporcionamos los detalles del evento:<br />
- Nombre del evento: ${nombreEvento}<br />
- Fecha: ${dia} ${mes} ${año} <br />
- Hora: ${horario}<br />
- Lugar: ${lugar}<br />
Tu registro ha sido procesado con éxito y ahora estás oficialmente inscrito/a para participar en el 
evento. Este será un encuentro emocionante donde podrás disfrutar de charlas inspiradoras, 
oportunidades y compartir conocimientos con otros afiliados y profesionales destacados en el 
campo.<br />
Te recomendamos llegar al evento con suficiente antelación para asegurarte de obtener un buen 
lugar y aprovechar al máximo la experiencia. Si tienes alguna pregunta adicional sobre el evento, el 
programa o cualquier otra cosa relacionada, no dudes en ponerte en contacto con nuestro equipo 
de organización.<br />
Queremos aprovechar esta oportunidad para agradecerte por ser parte de nuestra comunidad y por 
tu continuo apoyo a nuestras actividades. Valoramos tu compromiso y estamos emocionados de 
compartir este evento contigo.<br />
Esperamos que el evento supere tus expectativas y sea una experiencia enriquecedora para ti. ¡Nos 
vemos pronto!<br />
Contactos:<br />
- Teléfono: 555555555<br />
- Correo electrónico: organizacionomd@gmail.com<br />
¡Gracias nuevamente por tu participación y nos vemos en el evento!<br />
¡Saludos cordiales de la organización OMD!<br />`,
    },
  };

  return await addDoc(collectRef, emailContent);
}
