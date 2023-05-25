import logoOMD from "../assets/img/OMD_logo.jpg";
import perfil from "../assets/img/perfil.jpg";
// ----------------------------------------
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Evento from "../components/Evento";
import Capacitacion from "../components/Capacitacion";
import Galeria_hexagonal from "../components/Galeriahexagonal";
import { useFirestore } from "../config/useFirestore";
import { useEffect } from "react";

const descripcion =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ab qui in dolorum deserunt enim accusamus perspiciatis laudantium, doloremque, sed aspernatur ratione sequi pariatur quas dignissimos illum velit omnis vero?¡";

const Eventos = () => {
  const { data, error, loading, getNews } = useFirestore();
  useEffect(() => {
    getNews();
  }, []);

  if (loading) return <p>Cargando Datos</p>;
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
        <div>
          <Evento
            dirimg={item.imagen}
            creador={item.autor}
            fecha={item.fecha}
            titulo={item.nombre}
            descripcion={item.noticia}
            numComentarios={item.comentarios}
            numlikes={item.likes}
          ></Evento>
        </div>
      ))}

      <div className="cuadro-capacitacion">
        <h2>
          PROXIMAS<span> CAPACITACIONES</span>{" "}
        </h2>
      </div>
      <Capacitacion
        dirimg="\src\assets\img\Capacitacion1.jpg"
        titulo="Capacitación 1"
        descripcion={descripcion}
        disponibles="5"
      ></Capacitacion>
      <Capacitacion
        dirimg="\src\assets\img\Capacitacion2.jpg"
        titulo="Capacitación 2"
        descripcion={descripcion}
        disponibles="6"
      ></Capacitacion>
      <Capacitacion
        dirimg="\src\assets\img\Capacitacion3.jpg"
        titulo="Capacitación 3"
        descripcion={descripcion}
        disponibles="7"
      ></Capacitacion>
      <h2 className="galeria-titulo">EL TRABAJO DE NUESTROS ESTUDIANTES</h2>
      <Galeria_hexagonal />
      <Footer />
    </div>
  );
};

export default Eventos;
