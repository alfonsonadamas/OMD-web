import { Link } from "react-router-dom";
import "../assets/css/eventos.css";

const Evento = (evento) => {
  return (
    <>
      <div className="eventos" data-aos="fade-right">
        {/* <div className="eventos"> */}
        <div className="eventos-img">
          <img src={evento.dirimg} alt="img" />
        </div>
        <div className="subevent">
          {/* creador y fecha */}
          <div className="creador">
            <img src="\src\assets\img\perfil.jpg" alt="user" />
            <p>
              {evento.creador} | {evento.fecha}
            </p>
          </div>
          {/* evento */}
          <div className="descipcion">
            <Link className="link_evento" to={`/noticia/${evento.titulo}`}>
              {evento.titulo}
            </Link>
            <p>{evento.descripcion}</p>
          </div>
          {/* comentarios y likes */}
          <div className="comentarios"></div>
        </div>
      </div>
    </>
  );
};

export default Evento;
