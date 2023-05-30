import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore/lite";

export default async function sendNewUserEmail(currentUser, emailUser) {
  const collectRef = collection(db, "mail");

  const emailContent = {
    to: emailUser,
    message: {
      subject: " Confirmación de registro exitoso",
      text: `Estimado/a: ${currentUser},
Es un placer para nosotros informarte que tu registro en nuestra página está siendo verificado. 
Queremos darte la bienvenida a nuestra comunidad y agradecerte por unirte a nosotros.
A continuación, te proporcionamos tus datos de inicio de sesión:
Nombre de usuario: ${currentUser}
Correo Electronico: ${emailUser}
Si tienes alguna pregunta, inquietud o requieres asistencia adicional, no dudes en ponerte en 
contacto con nuestro equipo de soporte. Estaremos encantados de ayudarte en todo lo que 
necesites.
Agradecemos nuevamente tu registro y esperamos que disfrutes de tu experiencia en nuestra 
página. 
¡Saludos cordiales de la organización OMD!
`,
      html: `<p>Estimado/a: ${currentUser},<br />
            Es un placer para nosotros informarte que tu registro en nuestra página está siendo verificado. 
Queremos darte la bienvenida a nuestra comunidad y agradecerte por unirte a nosotros.<br />
A continuación, te proporcionamos tus datos de inicio de sesión:<br />
<br />
Nombre de usuario: ${currentUser}<br />
Correo Electronico: ${emailUser}<br />
<br />
Si tienes alguna pregunta, inquietud o requieres asistencia adicional, no dudes en ponerte en 
contacto con nuestro equipo de soporte. Estaremos encantados de ayudarte en todo lo que 
necesites.<br />
Agradecemos nuevamente tu registro y esperamos que disfrutes de tu experiencia en nuestra 
página. <br />
¡Saludos cordiales de la organización OMD!<br />
      
      </p>`,
    },
  };

  return await addDoc(collectRef, emailContent);
}
