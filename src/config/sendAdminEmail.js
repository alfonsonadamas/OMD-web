import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore/lite";

export default async function sendNewUserEmail(currentUser, emailUser) {
  const collectRef = collection(db, "mail");

  const emailContent = {
    to: "organizacionomd@gmail.com",
    message: {
      subject: "Confirmación requerida para finalizar el registro",
      text: `
Estimado equipo de nuestra organización OMD,
Me complace informarles que hemos recibido un nuevo registro en nuestra página web para el registro de un nuevo afiliado.
Nombre de usuario: ${currentUser}
Email: ${emailUser}
Sin embargo, antes de completar el proceso de registro, se requiere la confirmación de ustedes para verificar y validar la información proporcionada por el solicitante. Agradeceríamos que realizaran los siguientes pasos para finalizar el registro:
1. Revisen los detalles del registro: Adjunto encontrarán el formulario de registro completado por el solicitante. Por favor, verifiquen que toda la información esté completa y correcta.
2. Validen la solicitud: Verifiquen la elegibilidad y los requisitos necesarios para que el solicitante. Asegúrense de que cumpla con los criterios establecidos.
Por favor, envíen su confirmación y cualquier observación o instrucción adicional comunicar al solicitante su estado de participación.
`,
      html: `<p>Estimado equipo de nuestra organización OMD,<br />
Me complace informarles que hemos recibido un nuevo registro en nuestra página web para el registro de un nuevo afiliado.<br />
<br />
Nombre de usuario: ${currentUser}<br />
Email: ${emailUser}<br />
<br />
Sin embargo, antes de completar el proceso de registro, se requiere la confirmación de ustedes para verificar y validar la información proporcionada por el solicitante. <br />Agradeceríamos que realizaran los siguientes pasos para finalizar el registro:
1. Revisen los detalles del registro: Adjunto encontrarán el formulario de registro completado por el solicitante. Por favor, verifiquen que toda la información esté completa y correcta.<br />
2. Validen la solicitud: Verifiquen la elegibilidad y los requisitos necesarios para que el solicitante. Asegúrense de que cumpla con los criterios establecidos.<br />
Por favor, envíen su confirmación y cualquier observación o instrucción adicional comunicar al solicitante su estado de participación.<br />
      
      </p>`,
    },
  };

  return await addDoc(collectRef, emailContent);
}
