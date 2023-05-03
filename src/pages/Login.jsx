import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import "../assets/css/login.css";
import { useEffect, useState } from "react";
import { auth, login } from "../config/firebase";
import { useUserContext } from "../context/UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { user } = useUserContext();

  useEffect(() => {
    if (user) {
      navigate("/verificacionUsuario");
    }
  });

  const onSubmit = async (
    { email, password },
    { setSubmitting, setErrors, resetForm }
  ) => {
    console.log(email, password);

    try {
      const credentialUser = await login({ email, password });

      navigate("/verificacionSesion");
      console.log(credentialUser);
    } catch (error) {
      console.log(error.code);
      if (error.code === "auth/user-not-found") {
        return setErrors({ email: "Email o contraseña incorrectos" });
      }

      if (error.code === "auth/wrong-password") {
        return setErrors({ email: "Email o contraseña incorrectos" });
      }

      if (error.code === "auth/invalid-email") {
        return setErrors({ email: "Email o contraseña incorrectos" });
      }

      if (error.code === "auth/missing-password") {
        return setErrors({ email: "Email o contraseña incorrectos" });
      }
    } finally {
      setSubmitting(false);
    }
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string(),
    password: Yup.string().trim(),
  });

  return (
    <div>
      <div className="login" data-aos="fade-up">
        <div className="form_login">
          <Link to="/">
            <img src="../src/assets/img/OMD_logo(copy).png" alt="" />
          </Link>
          <h2>Iniciar Sesión</h2>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
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

                <div className="input_form">
                  <input
                    type="password"
                    placeholder="Contraseña"
                    value={values.password}
                    onChange={handleChange}
                    name="password"
                    onBlur={handleBlur}
                  />
                  <div className="input_icon">
                    <img src="../src/assets/img/candado.png" alt="" />
                  </div>
                </div>
                <p className="error">
                  {errors.email && touched.email && errors.email}
                  {errors.password && touched.password && errors.password}
                </p>
                <div className="fg_password">
                  <Link className="fg_password">Olvidaste tu contraseña?</Link>
                </div>

                <button
                  className="button_sbt"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Iniciar Sesion
                </button>
              </form>
            )}
          </Formik>

          <p className="link_register">
            Necesitas una cuenta?{" "}
            <Link to="/registro" className="register">
              Registrate
            </Link>
          </p>
        </div>

        <div className="login_img">
          <img src="../src/assets/img/login.jpg" alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
