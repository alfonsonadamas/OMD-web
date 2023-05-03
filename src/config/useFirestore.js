import { useContext, useEffect, useState } from "react";
import { db, auth } from "./firebase";
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore/lite";
import { UserContext } from "../context/UserContext";
import { getAuth } from "firebase/auth";

export const useFirestore = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [exist, setExist] = useState(true);

  const getUser = async () => {
    console.log(auth.currentUser);
    try {
      setLoading(true);
      const dataref = collection(db, "users");
      const q = query(dataref, where("uid", "==", auth.currentUser.uid));
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        const dataDB = querySnapshot.docs.map((doc) => doc.data());
        setData(dataDB);
      } else {
        setExist(false);
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const addUser = async (
    nombre,
    apellidoPaterno,
    apellidoMaterno,
    fechaNacimiento
  ) => {
    try {
      setLoading(true);
      const newDoc = {
        nombre: nombre,
        apellidoPaterno: apellidoPaterno,
        apellidoMaterno: apellidoMaterno,
        fechaNacimiento: fechaNacimiento,
        email: auth.currentUser.email,
        uid: auth.currentUser.uid,
      };

      const docRef = doc(db, "users", newDoc.nombre);
      await setDoc(docRef, newDoc);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    error,
    loading,
    getUser,
    exist,
    addUser,
  };
};
