import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore/lite";

export default async function sendCustomEmail(email, asunto, nombre) {
  const collectRef = collection(db, "mail");

  const emailContent = {
    to: email,
    message: {
      subject: "OMD te saluda",
      text: `Hola ${nombre} nos comunicaremos muy pronto contigo a tu celular ${asunto} o a tu correo ${email}`,
      html: `<p>Hola ${nombre} nos comunicaremos muy pronto contigo a tu celular ${asunto} o a tu correo ${email}</p>`,
    },
  };

  return await addDoc(collectRef, emailContent);
}
