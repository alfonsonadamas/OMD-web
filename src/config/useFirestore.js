import { useContext, useEffect, useState } from "react";
import { db, auth, storage } from "./firebase";
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore/lite";
import { UserContext } from "../context/UserContext";
import {
  getAuth,
  updateCurrentUser,
  updateEmail,
  updateProfile,
} from "firebase/auth";

import { ref, uploadBytes } from "firebase/storage";

export const useFirestore = () => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [dataCompany, setDataCompany] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [exist, setExist] = useState(true);
  const [existCompany, setExistCompany] = useState(true);
  const [coments, setComents] = useState(0);

  function random() {
    return Math.random().toString(36).substring(3, 15);
  }

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

  const getUserComents = async (uid) => {
    try {
      const dataref = collection(db, "users");
      const q = query(dataref, where("uid", "==", uid));
      const querySnapshot = await getDocs(q);

      const dataDB = querySnapshot.docs.map((doc) => doc.data());
      setData3(dataDB);
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
    }
  };

  const getNoticia = async (nombre) => {
    try {
      setLoading(true);
      const dataref = collection(db, "news");
      const q = query(dataref, where("nombre", "==", nombre));
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
      const dataref = collection(db, "capacitaciones");
      const q = query(dataref);
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        const dataDB = querySnapshot.docs.map((doc) => doc.data());
        setData2(dataDB);
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

  const getComents = async () => {
    try {
      setLoading(true);
      const dataref = collection(db, "comentarios");
      const q = query(dataref);
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        const dataDB = querySnapshot.docs.map((doc) => doc.data());
        setComents(dataDB.length);
        setData2(dataDB);
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

  const getCurrentDate = () => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    return year + " - " + month + " - " + date; //format: d-m-y;
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
        fechaDeCreacion: getCurrentDate(),
        fotoPerfil:
          "https://firebasestorage.googleapis.com/v0/b/omd-web-8c93f.appspot.com/o/usuarios%2Fperfil.png?alt=media&token=54587db0-54ae-4efd-8e0a-d43ae8864e49",
      };

      const docRef = doc(db, "users", newDoc.uid);
      await setDoc(docRef, newDoc);
      await updateProfile(auth.currentUser, {
        displayName: nombre + " " + apellidoPaterno,
      });
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
    ubicacion,
    file
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
        logo: file,
      };

      const docRef = doc(db, "company", newDoc.uid);
      await setDoc(docRef, newDoc);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const addComent = async (comentario) => {
    try {
      setLoading(true);
      const newDoc = {
        uid: auth.currentUser.uid,
        comentario: comentario,
        fechaDePublicacion: getCurrentDate(),
        nombreUsuario: auth.currentUser.displayName,
        fotoPerfil: auth.currentUser.photoURL,
      };

      const docRef = doc(db, "comentarios", random());
      await setDoc(docRef, newDoc);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const updateUser = async (
    nombre,
    apellidoPaterno,
    apellidoMaterno,
    fechaNacimiento,
    url
  ) => {
    try {
      setLoading(true);
      const docRef = doc(db, "users", auth.currentUser.uid);

      if (url == "") {
        await updateDoc(docRef, {
          nombre: nombre,
          apellidoMaterno: apellidoMaterno,
          apellidoPaterno: apellidoPaterno,
          fechaNacimiento: fechaNacimiento,
        });
      } else {
        await updateDoc(docRef, {
          nombre: nombre,
          apellidoMaterno: apellidoMaterno,
          apellidoPaterno: apellidoPaterno,
          fechaNacimiento: fechaNacimiento,
          fotoPerfil: url,
        });
      }

      await updateProfile(auth.currentUser, {
        displayName: nombre + " " + apellidoPaterno,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const updateCompany = async (
    nombre,
    ubicacion,
    telefono,
    correoEmpresa,
    sobreEmpresa,
    urlLogo
  ) => {
    try {
      setLoading(true);
      const docRef = doc(db, "company", auth.currentUser.uid);
      if (urlLogo == "") {
        await updateDoc(docRef, {
          correoEmpresa: correoEmpresa,
          nombreCompañia: nombre,
          sobreEmpresa: sobreEmpresa,
          telefono: telefono,
          ubicacion: ubicacion,
        });
      } else {
        await updateDoc(docRef, {
          correoEmpresa: correoEmpresa,
          logo: urlLogo,
          nombreCompañia: nombre,
          sobreEmpresa: sobreEmpresa,
          telefono: telefono,
          ubicacion: ubicacion,
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    data2,
    data3,
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
    getNoticia,
    updateUser,
    addComent,
    getComents,
    getUserComents,
    coments,
    updateCompany,
    getTrainings,
  };
};
