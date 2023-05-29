import { auth, db, login, logout, storage } from "../config/firebase";
import Navbar from "../components/Navbar";
import "../assets/css/perfil.css";
import logoOMD from "../assets/img/OMD_logo.png";
import perfil from "../assets/img/perfil.jpg";
import Login from "../pages/Login";
import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { useFirestore } from "../config/useFirestore";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import { updateProfile } from "firebase/auth";

const EditarPerfil = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const { data, error, loading, getUser, exist, updateUser } = useFirestore();
  const [file, setFile] = useState("");

  useEffect(() => {
    getUser();
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async (
    { nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento },
    { setSubmitting, setErrors, resetForm, setStatus }
  ) => {
    try {
      setSubmitting(true);

      let url = "";

      if (file != "") {
        const storageRef = ref(storage, `usuarios/${auth.currentUser.uid}`);
        await uploadBytes(storageRef, file);
        url = await getDownloadURL(storageRef);

        await updateProfile(auth.currentUser, { photoURL: url });
        await updateUser(
          nombre,
          apellidoPaterno,
          apellidoMaterno,
          fechaNacimiento,
          url
        );

        navigate("/perfil");
      } else {
        await updateUser(
          nombre,
          apellidoPaterno,
          apellidoMaterno,
          fechaNacimiento,
          url
        );
        navigate("/perfil");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  if (!user) {
    return <Login />;
  }

  if (loading) return <p>Cargando Datos</p>;
  if (error) return <p>{error}</p>;
  if (!exist) navigate("/verificacionCorreo");

  return (
    <div>
      <Navbar img={logoOMD} perfil={perfil} />

      <div className="info_personal">
        <div className="titulo_perfil">
          <h2>
            Editar Informacion <span>General</span>
          </h2>
        </div>
        {data.map((item) =>
          item.verificado ? (
            <Formik
              initialValues={{
                nombre: item.nombre,
                apellidoPaterno: item.apellidoPaterno,
                apellidoMaterno: item.apellidoMaterno,
                fechaNacimiento: item.fechaNacimiento,
                email: item.email,
              }}
              onSubmit={handleEdit}
            >
              {({ handleChange, isSubmitting, values, handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <div className="info_general">
                    <div className="foto_perfil">
                      {auth.currentUser.photoURL == null ? (
                        <img src="../src/assets/img/perfil.png" alt="" />
                      ) : (
                        <img src={auth.currentUser.photoURL} alt="" />
                      )}
                      <input
                        type="file"
                        name="imagen"
                        onChange={(e) => setFile(e.target.files[0])}
                      />
                    </div>
                    <div className="borde"></div>
                    <div className="info_perfil">
                      {data.map((item) => (
                        <div key={item.id}>
                          <p>
                            Nombre:{" "}
                            <input
                              type="text"
                              value={values.nombre}
                              name="nombre"
                              onChange={handleChange}
                            />
                          </p>
                          <p>
                            Apellido Paterno:
                            <input
                              type="text"
                              defaultValue={values.apellidoPaterno}
                              name="apellidoPaterno"
                              onChange={handleChange}
                            />
                          </p>
                          <p>
                            Apellido Materno:
                            <input
                              type="text"
                              defaultValue={values.apellidoMaterno}
                              name="apellidoMaterno"
                              onChange={handleChange}
                            />
                          </p>
                          <p>
                            Correo Electronico:{" "}
                            <input
                              type="text"
                              defaultValue={values.email}
                              disabled
                            />
                          </p>
                          <p>
                            Fecha de Nacimiento:{" "}
                            <input
                              type="text"
                              defaultValue={values.fechaNacimiento}
                              name="fechaNacimiento"
                              onChange={handleChange}
                            />
                          </p>
                        </div>
                      ))}

                      <button
                        className="btn_editar"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        Guardar
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </Formik>
          ) : (
            <div>No estas verificado</div>
          )
        )}
      </div>
    </div>
  );
};

export default EditarPerfil;
