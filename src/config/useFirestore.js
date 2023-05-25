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
  const [dataCompany, setDataCompany] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [exist, setExist] = useState(true);
  const [existCompany, setExistCompany] = useState(true);

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

  const getCompany = async () => {
    console.log(auth.currentUser);
    try {
      setLoading(true);
      const dataref = collection(db, "company");
      const q = query(dataref, where("uid", "==", auth.currentUser.uid));
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        const dataDB = querySnapshot.docs.map((doc) => doc.data());
        setDataCompany(dataDB);
      } else {
        setExistCompany(false);
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const getNews = async () => {
    try {
      setLoading(true);
      const dataref = collection(db, "news");
      const q = query(dataref);
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

  const getTrainings = async () => {
    try {
      setLoading(true);
      const dataref = collection(db, "news");
      const q = query(dataref);
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
        verificado: false,
      };

      const docRef = doc(db, "users", newDoc.nombre);
      await setDoc(docRef, newDoc);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const addCompany = async (
    nombreCompañia,
    correoEmpresa,
    sobreEmpresa,
    telefono,
    ubicacion
  ) => {
    try {
      setLoading(true);
      const newDoc = {
        nombreCompañia: nombreCompañia,
        correoEmpresa: correoEmpresa,
        sobreEmpresa: sobreEmpresa,
        telefono: telefono,
        ubicacion: ubicacion,
        uid: auth.currentUser.uid,
      };

      const docRef = doc(db, "company", newDoc.nombreCompañia);
      await setDoc(docRef, newDoc);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    dataCompany,
    error,
    loading,
    getUser,
    getNews,
    getCompany,
    exist,
    existCompany,
    addUser,
    addCompany,
  };
};
