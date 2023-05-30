import Footer from "../components/Footer";
import "../assets/css/login.css";
import { auth, logout, register, storage } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import { sendEmailVerification } from "firebase/auth";
import { Formik } from "formik";
import * as Yup from "yup";
import { useFirestore } from "../config/useFirestore";
import { useState } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const RegistroCompania = () => {
  const navigate = useNavigate();
  const { addCompany } = useFirestore();
  const [file, setFile] = useState("");

  const onSubmit = async (
    { nombreCompañia, correoEmpresa, sobreEmpresa, telefono, ubicacion },
    { setSubmitting, setErrors, resetForm, setStatus },
    e
  ) => {
    try {
      setSubmitting(true);
      const storageRef = ref(
        storage,
        `emprendimientos/${auth.currentUser.uid}`
      );
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      addCompany(
        nombreCompañia,
        correoEmpresa,
        sobreEmpresa,
        telefono,
        ubicacion,
        url
      );
      navigate("/perfil");
      console.log("enviando form");
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  const validationSchemas = Yup.object().shape({
    nombreCompañia: Yup.string().required("Campo Requerido"),
    correoEmpresa: Yup.string().required("Campo Requerido").email(),
    sobreEmpresa: Yup.string().required("Campo Requerido"),
    telefono: Yup.string().required("Campo Requerido").length(10),
    ubicacion: Yup.string().required("Campo Requerido"),
  });

  return (
    <div>
      <div data-aos="fade-up" className="register_form">
        <div className="register_img">
          <img src="../src/assets/img/OMD_logo.png" alt="" />
        </div>

        <div className="register_tittle">
          <h2>LISTO PARA EL SIGUIENTE PASO?</h2>
          <h3>REGISTRA TU COMPAÑÍA O EMPRENDIMIENTO CON NOSOTROS</h3>
        </div>

        <Formik
          initialValues={{
            nombreCompañia: "",
            correoEmpresa: "",
            sobreEmpresa: "",
            telefono: "",
            ubicacion: "",
          }}
          onSubmit={onSubmit}
          validationSchema={validationSchemas}
        >
          {({
            values,
            handleSubmit,
            handleChange,
            errors,
            touched,
            handleBlur,
            isSubmitting,
          }) => (
            <div className="FormularioEmpresa">
              <form onSubmit={handleSubmit}>
                <div className="input_formRegistrar">
                  <input
                    type="text"
                    placeholder="Nombre de la empresa o emprendimiento"
                    value={values.name}
                    onChange={handleChange}
                    name="nombreCompañia"
                    onBlur={handleBlur}
                  />
                </div>

                <p className="error">
                  {errors.nombreCompañia &&
                    touched.nombreCompañia &&
                    errors.nombreCompañia}
                </p>

                <div className="input_formRegistrar">
                  <input
                    type="email"
                    placeholder="Correo de contacto"
                    value={values.correoEmpresa}
                    name="correoEmpresa"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <p className="error">
                  {errors.correoEmpresa &&
                    touched.correoEmpresa &&
                    errors.correoEmpresa}
                </p>

                <div className="input_formRegistrar">
                  <input
                    type="text"
                    placeholder="Telefono de la empresa"
                    value={values.telefono}
                    name="telefono"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <p className="error">
                  {errors.telefono && touched.telefono && errors.telefono}
                </p>

                <div className="input_formRegistrar">
                  <input
                    type="text"
                    placeholder="Ubicación"
                    value={values.ubicacion}
                    name="ubicacion"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <p className="error">
                  {errors.ubicacion && touched.ubicacion && errors.ubicacion}
                </p>

                <div className="registroLogo">
                  <h3>Logo</h3>
                  <input
                    type="file"
                    required
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </div>

                <div className="input_formRegistrar">
                  <textarea
                    className="area"
                    name="sobreEmpresa"
                    id=""
                    cols="55"
                    rows="5"
                    placeholder="Cuentanos acerca de tu empresa"
                    value={values.sobreEmpresa}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></textarea>
                </div>
                <p className="error">
                  {errors.sobreEmpresa &&
                    touched.sobreEmpresa &&
                    errors.sobreEmpresa}
                </p>

                <button
                  className="button_sbt_register"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Registrar
                </button>
              </form>
            </div>
          )}
        </Formik>
      </div>
      <Footer />
    </div>
  );
};

export default RegistroCompania;
