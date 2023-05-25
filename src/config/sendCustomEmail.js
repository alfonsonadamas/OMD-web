import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore/lite";

export default async function sendCustomEmail(email, subject, body) {
  const collectRef = collection(db, "mail");

  const emailContent = {
    to: email,
    message: {
      subject: subject,
      text: body,
      html: `<p>${body}</p>`,
    },
  };

  return await addDoc(collectRef, emailContent);
}
