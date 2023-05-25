import { Link } from "react-router-dom"
import "../assets/css/eventos.css"

const Evento = (evento) =>{
    return(
      <>
        <div className="eventos" data-aos="fade-right">
        {/* <div className="eventos"> */}
          <div class="eventos-img">
            <img src={evento.dirimg}  alt='img' />
          </div>
          <div className="subevent">
            {/* creador y fecha */}
              <div className="creador">
                <img src="\src\assets\img\perfil.jpg" alt='user' />
                <p>{evento.creador} | {evento.fecha}</p>
              </div>
            {/* evento */}
              <div className="descipcion">
                <h1>{evento.titulo}</h1>
                <p>{evento.descripcion}</p>
              </div>
            {/* comentarios y likes */}
              <div className="comentarios">
                <div className="coment">
                    <p>{evento.numComentarios} comentarios</p>
                </div>
                <div className="like">
                    <Link to='/noticia' >{evento.numlikes}</Link>
                    <img src='\src\assets\img\Corazon.png' alt='like' />
                </div>
              </div>
              
          </div>
        </div>
      </>
    )
  }
  
  export default Evento;