import { auth, db, login, logout, storage } from "../config/firebase";
import Navbar from "../components/Navbar";
import "../assets/css/perfil.css";
import logoOMD from "../assets/img/OMD_logo.jpg";
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
import Spinner from "../components/Spinner";

const EditarEmpresa = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const { dataCompany, error, loading, getCompany, exist, updateCompany } =
    useFirestore();
  const [file, setFile] = useState("");

  useEffect(() => {
    getCompany();
  }, []);

  const handleEdit = async (
    { nombre, ubicacion, telefono, correoEmpresa, sobreEmpresa },
    { setSubmitting, setErrors, resetForm, setStatus }
  ) => {
    try {
      setSubmitting(true);
      let url = "";

      if (file != "") {
        const storageRef = ref(
          storage,
          `emprendimientos/${auth.currentUser.uid}`
        );
        await uploadBytes(storageRef, file);
        url = await getDownloadURL(storageRef);

        await updateCompany(
          nombre,
          ubicacion,
          telefono,
          correoEmpresa,
          sobreEmpresa,
          url
        );

        navigate("/perfil");
      } else {
        await updateCompany(
          nombre,
          ubicacion,
          telefono,
          correoEmpresa,
          sobreEmpresa,
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

  if (loading) return <Spinner></Spinner>;
  if (error) return <p>{error}</p>;
  if (!exist) navigate("/verificacionCorreo");

  return (
    <div>
      <Navbar img={logoOMD} perfil={perfil} />

      <div className="info_empresa">
        <div className="titulo_empresa">
          <h2>
            EDITAR INFORMACIÓN DE <span>EMPRESA</span>
          </h2>
        </div>
        {dataCompany.map((item) => (
          <Formik
            key={item.uid}
            initialValues={{
              nombre: item.nombreCompañia,
              ubicacion: item.ubicacion,
              telefono: item.telefono,
              correoEmpresa: item.correoEmpresa,
              sobreEmpresa: item.sobreEmpresa,
            }}
            onSubmit={handleEdit}
          >
            {({ handleChange, isSubmitting, values, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <div className="info_general">
                  <div className="foto_perfil">
                    <img src={item.logo} alt="" />

                    <input
                      type="file"
                      name="imagen"
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                  </div>
                  <div className="borde"></div>
                  <div className="info_perfil">
                    <div>
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
                        Ubicacion:
                        <input
                          type="text"
                          defaultValue={values.ubicacion}
                          name="ubicacion"
                          onChange={handleChange}
                        />
                      </p>
                      <p>
                        Telefono:
                        <input
                          type="text"
                          defaultValue={values.telefono}
                          name="telefono"
                          onChange={handleChange}
                        />
                      </p>
                      <p>
                        Correo Electronico:{" "}
                        <input
                          type="text"
                          defaultValue={values.correoEmpresa}
                        />
                      </p>
                      <p>
                        Sobre Empresa:{" "}
                        <input
                          type="text"
                          defaultValue={values.sobreEmpresa}
                          name="sobreEmpresa"
                          onChange={handleChange}
                        />
                      </p>
                    </div>

                    <button
                      className="btn_editarEmpresa"
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
        ))}
      </div>
    </div>
  );
};

export default EditarEmpresa;
