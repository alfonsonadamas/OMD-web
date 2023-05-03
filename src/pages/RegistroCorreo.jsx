import Footer from "../components/Footer";
import "../assets/css/login.css";
import { logout, register } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import { sendEmailVerification } from "firebase/auth";
import { Formik } from "formik";
import * as Yup from "yup";

const RegistroCorreo = () => {
  const navigate = useNavigate();

  const onSubmit = async (
    { email, password, confirmPassword },
    { setSubmitting, setErrors, resetForm, setStatus }
  ) => {
    try {
      if (password === confirmPassword) {
        const userCredential = await register({ email, password });
        await sendEmailVerification(userCredential.user);
        navigate("/verificacionCorreo");
      }
    } catch (error) {
      console.log(error.code);
      if (error.code === "auth/email-already-in-use") {
        return setErrors({ email: "Email ya en uso" });
      }
    } finally {
      setSubmitting(false);
    }
  };

  const validationSchemas = Yup.object().shape({
    email: Yup.string().email("Email Invalido").required("Email Requerido"),
    password: Yup.string()
      .trim()
      .min(6, "Minimo 6 caracteres")
      .required("Contraseña requerida"),
  });

  return (
    <div>
      <div data-aos="fade-up" className="register_form">
        <div className="register_img">
          <img src="../src/assets/img/OMD_logo(copy).png" alt="" />
        </div>

        <div className="register_tittle">
          <h2>SE PARTE DE NOSOTROS</h2>
          <h3>PRE-REGISTRO</h3>
          <p>Paso 1: </p>
        </div>

        <Formik
          initialValues={{ email: "", password: "", confirmPassword: "" }}
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
                  type="email"
                  placeholder="Correo Electronico"
                  value={values.email}
                  onChange={handleChange}
                  name="email"
                  onBlur={handleBlur}
                />

                <div className="input_icon">
                  <img src="../src/assets/img/user.png" alt="" />
                </div>
              </div>

              <p className="error">
                {errors.email && touched.email && errors.email}
              </p>

              <div className="input_form">
                <input
                  type="password"
                  placeholder="Contraseña"
                  value={values.password}
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <div className="input_icon">
                  <img src="../src/assets/img/candado.png" alt="" />
                </div>
              </div>

              <div className="input_form">
                <input
                  type="password"
                  placeholder="Confirmar Contraseña"
                  value={values.confirmPassword}
                  name="confirmPassword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <div className="input_icon">
                  <img src="../src/assets/img/candado.png" alt="" />
                </div>
              </div>
              <p className="error">
                {errors.password && touched.password && errors.password}
              </p>

              {values.password !== values.confirmPassword && (
                <p className="error">Las contraseñas no coinciden</p>
              )}
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

export default RegistroCorreo;
