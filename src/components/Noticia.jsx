import logoOMD from "../assets/img/OMD_logo.png";
import perfil from "../assets/img/perfil.jpg";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { Link, useNavigate, useParams } from "react-router-dom";
import "../assets/css/noticia.css";
import { useFirestore } from "../config/useFirestore";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import { auth } from "../config/firebase";
import { Formik } from "formik";
import { useUserContext } from "../context/UserContext";

const Noticia = () => {
  const {
    data,
    data2,
    data3,
    error,
    loading,
    getNoticia,
    getComents,
    getUserComents,
    coments,
    addComent,
    exist,
  } = useFirestore();

  const { user } = useUserContext();

  const [comentarios, setComentarios] = useState(0);
  let { id_noticia } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getNoticia(id_noticia);
    getComents(id_noticia);
  }, []);

  const handleComent = async (
    { comentario },
    { setSubmitting, setErrors, resetForm, setStatus }
  ) => {
    try {
      setSubmitting(true);

      await addComent(comentario, id_noticia);
      navigate(`/noticia/${id_noticia}`);
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <Spinner></Spinner>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Navbar img={logoOMD} perfil={perfil}></Navbar>
      {data.map((item) => (
        <div className="contenedorN" key={item.id_noticia}>
          <div>
            <div className="EncLinks">
              <h3>
                {" "}
                <Link className="noticia" to={"/eventos"}>
                  Noticia
                </Link>{" "}
                - <span>{item.nombre}</span>
              </h3>
            </div>
            <div className="contenedorNoticia">
              <div className="NotCont">
                <div className="usuarioc">
                  <img
                    className="creador"
                    src="\src\assets\img\perfil.jpg"
                    alt=""
                  />
                  <p>
                    {item.autor} | {item.fecha}
                  </p>
                </div>
                <h2>{item.nombre}</h2>
                <img src={item.imagen} alt="" />
                <p>{item.noticia}</p>
              </div>
              <div className="Interacciones">
                <p className="com">{coments} comentario(s)</p>
              </div>
              <div className="AgregarCom">
                <Formik
                  initialValues={{
                    comentario: "",
                  }}
                  onSubmit={handleComent}
                >
                  {({ handleChange, isSubmitting, values, handleSubmit }) => (
                    <form className="Formulario" onSubmit={handleSubmit}>
                      <textarea
                        name="comentario"
                        id=""
                        cols="30"
                        rows="10"
                        placeholder="Escribe un nuevo comentario"
                        value={values.comentario}
                        onChange={handleChange}
                      ></textarea>
                      <div className="Botones">
                        {user ? (
                          <input
                            id="Publicar"
                            type="submit"
                            disabled={isSubmitting}
                          />
                        ) : (
                          <Link to={"/login"} className="pub_coment">
                            Enviar
                          </Link>
                        )}
                      </div>
                    </form>
                  )}
                </Formik>
              </div>
              {data2.map((item2) => (
                <div className="Comentarios" key={item2.uid}>
                  {item2.fotoPerfil == null ? (
                    <img src="../src/assets/img/perfil.png" alt="perfil" />
                  ) : (
                    <img src={item2.fotoPerfil} alt="" />
                  )}

                  <div className="Comentario">
                    <h4>{item2.nombreUsuario}</h4>

                    <p>{item2.comentario}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
      <Footer></Footer>
    </>
  );
};

export default Noticia;
