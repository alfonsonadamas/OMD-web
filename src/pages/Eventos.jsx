import logoOMD from "../assets/img/OMD_logo.png";
import perfil from "../assets/img/perfil.jpg";
// ----------------------------------------
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Evento from "../components/Evento";
import Capacitacion from "../components/Capacitacion";
import Galeria_hexagonal from "../components/Galeriahexagonal";
import { useFirestore } from "../config/useFirestore";
import { useEffect } from "react";
import Spinner from "../components/Spinner";

const descripcion =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ab qui in dolorum deserunt enim accusamus perspiciatis laudantium, doloremque, sed aspernatur ratione sequi pariatur quas dignissimos illum velit omnis vero?¡";

const Eventos = () => {
  const {
    data,
    data2,
    error,
    loading,
    getNews,
    getTrainings,
    coments,
    getComents,
  } = useFirestore();
  useEffect(() => {
    getNews();
    getTrainings();
  }, []);

  let comentarios = 0;

  if (loading) return <Spinner></Spinner>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <Navbar img={logoOMD} perfil={perfil}></Navbar>
      <div className="cuadro-evento">
        <h2>
          NUESTROS<span> EVENTOS</span>{" "}
        </h2>
      </div>
      {data.map((item) => (
        <div key={item.id_noticia}>
          <Evento
            dirimg={item.imagen}
            creador={item.autor}
            fecha={item.fecha}
            titulo={item.nombre}
            descripcion={item.noticia}
            numComentarios={item.comentarios}
            numlikes={item.likes}
            id_noticia={item.id_noticia}
          ></Evento>
        </div>
      ))}

      <div className="cuadro-capacitacion">
        <h2>
          PROXIMAS<span> CAPACITACIONES</span>{" "}
        </h2>
      </div>
      {data2.map((item) => (
        <div key={item.nombre}>
          <Capacitacion
            dirimg={item.imagen}
            titulo={item.nombre}
            descripcion={item.descripcion}
            disponibles={item.espaciosDisponibles}
          ></Capacitacion>
        </div>
      ))}

      <h2 className="galeria-titulo">EL TRABAJO DE NUESTROS ESTUDIANTES</h2>
      <Galeria_hexagonal />
      <Footer />
    </div>
  );
};

export default Eventos;
