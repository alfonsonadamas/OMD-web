import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore/lite";

export default async function sendCustomEmail(email, asunto, nombre) {
  const collectRef = collection(db, "mail");

  const emailContent = {
    to: email,
    message: {
      subject: " ¡Respuesta a tu consulta desde nuestra página web de la OMD!",
      text: `Es un placer ponernos en contacto contigo en respuesta a tu consulta enviada a través de nuestra 
página web. Apreciamos tu interés y nos complace poder asistirte en lo que necesites.
Para que podamos brindarte el mejor servicio posible, te pedimos que nos proporciones la siguiente 
información:
1. Detalles de tu consulta o solicitud: 
Nombre: ${nombre}
Correo: ${email}
Celular: ${asunto}
Tan pronto como recibamos esta información, nos pondremos en marcha para atender tu consulta 
de manera prioritaria. Queremos asegurarte que estamos comprometidos con brindar un excelente 
servicio. Valoramos tu interés en nuestra organización y esperamos poder resolver tus inquietudes 
de manera rápida y satisfactoria.
Si tienes alguna pregunta adicional o necesitas asistencia inmediata, no dudes en comunicarte con 
nosotros a través de los siguientes medios de contacto:
- Teléfono: 5555555555
- Correo electrónico: organizacionomd@gmail.com
Agradecemos nuevamente tu interés y esperamos poder atenderte pronto. Estamos comprometidos 
en brindarte una excelente experiencia con nuestros productos/servicios.
¡Saludos cordiales de la organización OMD!`,
      html: `<p>Es un placer ponernos en contacto contigo en respuesta a tu consulta enviada a través de nuestra 
página web. Apreciamos tu interés y nos complace poder asistirte en lo que necesites.<br />
Para que podamos brindarte el mejor servicio posible, te pedimos que nos proporciones la siguiente 
información:<br />
1. Detalles de tu consulta o solicitud: <br />
Nombre: ${nombre}<br />
Correo: ${email}<br />
Celular: ${asunto}<br />
Tan pronto como recibamos esta información, nos pondremos en marcha para atender tu consulta 
de manera prioritaria. Queremos asegurarte que estamos comprometidos con brindar un excelente 
servicio. Valoramos tu interés en nuestra organización y esperamos poder resolver tus inquietudes 
de manera rápida y satisfactoria.<br />
Si tienes alguna pregunta adicional o necesitas asistencia inmediata, no dudes en comunicarte con 
nosotros a través de los siguientes medios de contacto:<br />
- Teléfono: 5555555555<br />
- Correo electrónico: organizacionomd@gmail.com<br />
Agradecemos nuevamente tu interés y esperamos poder atenderte pronto. Estamos comprometidos 
en brindarte una excelente experiencia con nuestros productos/servicios.<br />
¡Saludos cordiales de la organización OMD!</p>`,
    },
  };

  return await addDoc(collectRef, emailContent);
}
