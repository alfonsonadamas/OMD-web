import { useContext, useEffect, useState } from "react";
import { db, auth, storage } from "./firebase";
import {
  and,
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
  const [data4, setData4] = useState([]);
  const [data5, setData5] = useState([]);
  const [data6, setData6] = useState([]);
  const [data7, setData7] = useState([]);
  const [data8, setData8] = useState([]);
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

  const getCapacitacion = async (nombre) => {
    try {
      setLoading(true);
      const dataref = collection(db, "capacitaciones");
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

  const getCapacitacionHorario = async (nombre) => {
    try {
      setLoading(true);
      const dataref = collection(db, "capacitacionesHorarios");
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

  const getComents = async (idNoticia) => {
    try {
      setLoading(true);
      const dataref = collection(db, "comentarios");
      const q = query(dataref, where("noticia", "==", idNoticia));
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

  const getRegistroCapacitaciones = async (nombre) => {
    try {
      setLoading(true);
      const dataref = collection(db, "registrosCapacitaciones");
      const q = query(
        dataref,
        where("nombreCapacitacion", "==", nombre),
        where("uid", "==", auth.currentUser.uid)
      );
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

  const getRegistroEvento1 = async (uid) => {
    try {
      const dataref = collection(db, "registrosEventos");
      const q = query(
        dataref,
        where("idEvento", "==", "evento1"),
        where("uid", "==", uid)
      );
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        const dataDB = querySnapshot.docs.map((doc) => doc.data());
        setData4(dataDB);
      } else {
        setExist(false);
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  const getRegistroEvento2 = async (uid) => {
    try {
      const dataref = collection(db, "registrosEventos");
      const q = query(
        dataref,
        where("idEvento", "==", "evento2"),
        where("uid", "==", uid)
      );
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        const dataDB = querySnapshot.docs.map((doc) => doc.data());
        setComents(dataDB.length);
        setData5(dataDB);
      } else {
        setExist(false);
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  const getRegistroEvento3 = async (uid) => {
    try {
      const dataref = collection(db, "registrosEventos");
      const q = query(
        dataref,
        where("idEvento", "==", "evento3"),
        where("uid", "==", uid)
      );
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        const dataDB = querySnapshot.docs.map((doc) => doc.data());
        setComents(dataDB.length);
        setData6(dataDB);
      } else {
        setExist(false);
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  const getNosotros = async () => {
    try {
      setLoading(true);
      const dataref = collection(db, "nosotros");
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

  const getInicio1 = async () => {
    try {
      setLoading(true);
      const dataref = collection(db, "inicio1");
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

  const getGaleriaHex = async () => {
    try {
      setLoading(true);
      const dataref = collection(db, "eventosImg");
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

  const getCarruselAfi = async () => {
    try {
      setLoading(true);
      const dataref = collection(db, "afiliados");
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

  const getvermasCarrusel = async () => {
    try {
      setLoading(true);
      const dataref = collection(db, "vermasCarrusel");
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

  const getInicio2 = async () => {
    try {
      setLoading(true);
      const dataref = collection(db, "inicio2");
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

  const getCarrusel = async () => {
    try {
      setLoading(true);
      const dataref = collection(db, "carrusel");
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

  const getGaleria = async () => {
    try {
      setLoading(true);
      const dataref = collection(db, "galeria");

      const q = query(dataref, where("numImagen", "==", "1"));
      const querySnapshot = await getDocs(q);
      const dataDB = querySnapshot.docs.map((doc) => doc.data());
      setData(dataDB);

      const q2 = query(dataref, where("numImagen", "==", "2"));
      const querySnapshot2 = await getDocs(q2);
      const dataDB2 = querySnapshot2.docs.map((doc) => doc.data());
      setData2(dataDB2);

      const q3 = query(dataref, where("numImagen", "==", "3"));
      const querySnapshot3 = await getDocs(q3);
      const dataDB3 = querySnapshot3.docs.map((doc) => doc.data());
      setData3(dataDB3);

      const q4 = query(dataref, where("numImagen", "==", "4"));
      const querySnapshot4 = await getDocs(q4);
      const dataDB4 = querySnapshot4.docs.map((doc) => doc.data());
      setData4(dataDB4);

      const q5 = query(dataref, where("numImagen", "==", "5"));
      const querySnapshot5 = await getDocs(q5);
      const dataDB5 = querySnapshot5.docs.map((doc) => doc.data());
      setData5(dataDB5);

      const q6 = query(dataref, where("numImagen", "==", "6"));
      const querySnapshot6 = await getDocs(q6);
      const dataDB6 = querySnapshot6.docs.map((doc) => doc.data());
      setData6(dataDB6);

      const q7 = query(dataref, where("numImagen", "==", "7"));
      const querySnapshot7 = await getDocs(q7);
      const dataDB7 = querySnapshot7.docs.map((doc) => doc.data());
      setData7(dataDB7);

      const q8 = query(dataref, where("numImagen", "==", "8"));
      const querySnapshot8 = await getDocs(q8);
      const dataDB8 = querySnapshot8.docs.map((doc) => doc.data());
      setData8(dataDB8);
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const getCalendario = async () => {
    try {
      setLoading(true);
      const dataref = collection(db, "proximosEventos");
      const q = query(dataref, where("idEvento", "==", "evento1"));
      const querySnapshot = await getDocs(q);

      const dataDB = querySnapshot.docs.map((doc) => doc.data());

      setData(dataDB);

      const q2 = query(dataref, where("idEvento", "==", "evento2"));
      const querySnapshot2 = await getDocs(q2);

      const dataDB2 = querySnapshot2.docs.map((doc) => doc.data());

      setData2(dataDB2);

      const q3 = query(dataref, where("idEvento", "==", "evento3"));
      const querySnapshot3 = await getDocs(q3);

      const dataDB3 = querySnapshot3.docs.map((doc) => doc.data());

      setData3(dataDB3);
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

  const addRegistroCapacitacion = async (uid, nombreCapacitacion, correo) => {
    try {
      setLoading(true);
      const newDoc = {
        uid: uid,
        nombreCapacitacion: nombreCapacitacion,
        correo: correo,
      };

      const docRef = doc(db, "registrosCapacitaciones", random());
      await setDoc(docRef, newDoc);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const addRegistroEvento = async (uid, idEvento, correo) => {
    try {
      setLoading(true);
      const newDoc = {
        uid: uid,
        idEvento: idEvento,
        correo: correo,
      };

      const docRef = doc(db, "registrosEventos", random());
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

  const addComent = async (comentario, idNoticia) => {
    try {
      setLoading(true);
      setComents(coments + 1);
      const newDoc = {
        uid: auth.currentUser.uid,
        comentario: comentario,
        fechaDePublicacion: getCurrentDate(),
        nombreUsuario: auth.currentUser.displayName,
        fotoPerfil: auth.currentUser.photoURL,
        comentarios: coments,
        noticia: idNoticia,
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
    data4,
    data5,
    data6,
    data7,
    data8,
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
    getCapacitacion,
    getCapacitacionHorario,
    addRegistroCapacitacion,
    getRegistroCapacitaciones,
    getNosotros,
    getCalendario,
    getRegistroEvento1,
    getRegistroEvento2,
    getRegistroEvento3,
    addRegistroEvento,
    getInicio1,
    getGaleria,
    getGaleriaHex,
    getCarruselAfi,
    getCarrusel,
    getvermasCarrusel,
    getInicio2,
  };
};
