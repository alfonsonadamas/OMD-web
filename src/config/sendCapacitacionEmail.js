import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore/lite";

export default async function sendCapacitacionEmail(
  email,
  nombreCapacitacion,
  nombreUser,
  fecha,
  horario,
  duracion
) {
  const collectRef = collection(db, "mail");

  const emailContent = {
    to: email,
    message: {
      subject: ` Confirmación de registro para la capacitación de ${nombreCapacitacion}`,
      text: `Estimado/a: ${nombreUser},
¡Nos complace informarte que tu registro para la capacitación de ${nombreCapacitacion} ha sido exitoso! Agradecemos tu interés en participar y 
estamos entusiasmados de contar contigo.
La capacitación se llevará a cabo en las siguientes fechas:
- Fecha: ${fecha}
- Horario: ${horario}
- Duración: ${duracion}
La capacitación de ${nombreCapacitacion} será una excelente oportunidad para adquirir nuevos 
conocimientos y habilidades. Nuestros capacitadores expertos 
compartirán valiosa información y experiencias prácticas que te ayudarán a mejorar tus habilidades 
profesionales y alcanzar tus metas.
Te sugerimos llegar al lugar de la capacitación con suficiente antelación para registrarte y asegurarte 
de tener un asiento cómodo. Si tienes alguna pregunta o inquietud antes de la capacitación, no 
dudes en ponerte en contacto con nuestro equipo de organización
Queremos agradecerte por ser parte de nuestra comunidad y por tu interés en mejorar tus 
habilidades profesionales con nosotros. Si necesitas más información o tienes alguna consulta 
adicional, no dudes en comunicarte con nosotros a través de los siguientes medios de contacto:
- Teléfono: 5555555555
- Correo electrónico: organizacionomd@gmail.com
¡Gracias nuevamente por tu participación y nos vemos en la capacitación!
¡Saludos cordiales de la organización OMD!
`,
      html: `<p>Estimado/a: ${nombreUser},
¡Nos complace informarte que tu registro para la capacitación de ${nombreCapacitacion} ha sido exitoso! Agradecemos tu interés en participar y 
estamos entusiasmados de contar contigo.<br />
La capacitación se llevará a cabo en las siguientes fechas:<br />
- Fecha: ${fecha}<br />
- Horario: ${horario}<br />
- Duración: ${duracion}<br />
La capacitación de ${nombreCapacitacion} será una excelente oportunidad para adquirir nuevos 
conocimientos y habilidades. Nuestros capacitadores expertos 
compartirán valiosa información y experiencias prácticas que te ayudarán a mejorar tus habilidades 
profesionales y alcanzar tus metas.<br />
Te sugerimos llegar al lugar de la capacitación con suficiente antelación para registrarte y asegurarte 
de tener un asiento cómodo. Si tienes alguna pregunta o inquietud antes de la capacitación, no 
dudes en ponerte en contacto con nuestro equipo de organización.<br />
Queremos agradecerte por ser parte de nuestra comunidad y por tu interés en mejorar tus 
habilidades profesionales con nosotros. Si necesitas más información o tienes alguna consulta <br />
adicional, no dudes en comunicarte con nosotros a través de los siguientes medios de contacto:<br />
- Teléfono: 5555555555<br />
- Correo electrónico: organizacionomd@gmail.com<br />
¡Gracias nuevamente por tu participación y nos vemos en la capacitación!<br />
¡Saludos cordiales de la organización OMD!<br /></p>`,
    },
  };

  return await addDoc(collectRef, emailContent);
}
