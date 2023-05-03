import Footer from "../components/Footer";
import "../assets/css/login.css";
import { auth, logout, register } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import { sendEmailVerification } from "firebase/auth";
import { Formik } from "formik";
import * as Yup from "yup";
import { useFirestore } from "../config/useFirestore";

const RegistroUsuario = () => {
  const navigate = useNavigate();
  const { addUser } = useFirestore();

  const onSubmit = async (
    { nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento },
    { setSubmitting, setErrors, resetForm, setStatus },
    e
  ) => {
    try {
      setSubmitting(true);
      addUser(nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento);
      navigate("/login");
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  const validationSchemas = Yup.object().shape({
    nombre: Yup.string().required("Campo Requerido"),
    apellidoPaterno: Yup.string().required("Campo Requerido"),
    apellidoMaterno: Yup.string().required("Campo Requerido"),
    fechaNacimiento: Yup.string().required("Campo Requerido"),
  });

  return (
    <div>
      <div data-aos="fade-up" className="register_form">
        <div className="register_img">
          <img src="../src/assets/img/OMD_logo(copy).png" alt="" />
        </div>

        <div className="register_tittle">
          <h2>SE PARTE DE NOSOTROS</h2>
          <h3>REGISTRO</h3>
          <p>Paso 2: </p>
        </div>

        <Formik
          initialValues={{
            nombre: "",
            apellidoPaterno: "",
            apellidoMaterno: "",
            fechaNacimiento: "",
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
            <form onSubmit={handleSubmit}>
              <div className="input_form">
                <input
                  type="text"
                  placeholder="Nombre"
                  value={values.name}
                  onChange={handleChange}
                  name="nombre"
                  onBlur={handleBlur}
                />
              </div>

              <p className="error">
                {errors.nombre && touched.nombre && errors.nombre}
              </p>

              <div className="input_form">
                <input
                  type="text"
                  placeholder="Apellido Paterno"
                  value={values.apellidoPaterno}
                  name="apellidoPaterno"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <p className="error">
                {errors.apellidoPaterno &&
                  touched.apellidoPaterno &&
                  errors.apellidoPaterno}
              </p>

              <div className="input_form">
                <input
                  type="text"
                  placeholder="Apellido Materno"
                  value={values.apellidoMaterno}
                  name="apellidoMaterno"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <p className="error">
                {errors.apellidoMaterno &&
                  touched.apellidoMaterno &&
                  errors.apellidoMaterno}
              </p>

              <div className="input_form">
                <input
                  type="date"
                  placeholder="Fecha de Nacimiento"
                  value={values.fechaNacimiento}
                  name="fechaNacimiento"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <p className="error">
                {errors.fechaNacimiento &&
                  touched.fechaNacimiento &&
                  errors.fechaNacimiento}
              </p>

              <button
                className="button_sbt_register"
                type="submit"
                disabled={isSubmitting}
              >
                Siguiente
              </button>
            </form>
          )}
        </Formik>
      </div>
      <Footer />
    </div>
  );
};

export default RegistroUsuario;
