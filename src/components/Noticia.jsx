import { Link } from "react-router-dom";
import "../assets/css/noticia.css";

const Noticia = () => {
  return (
    <>
      <div className="contenedorN">
        <div className="EncLinks">
          <h3>
            {" "}
            <Link className="noticia" to={"/eventos"}>
              Noticia
            </Link>{" "}
            - <span>Carrera 5km</span>
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
              <p>Administrador | 20 de Febrero de 2023</p>
            </div>
            <h2>Carrera 5km</h2>
            <img src="\src\assets\img\Carrera5k.jpg" alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              blandit luctus pretium. Donec quis est consectetur, posuere leo
              at, elementum nisl. Integer id feugiat lectus. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Sed blandit luctus pretium.
              Donec quis est consectetur, posuere leo at, elementum nisl.
              Integer id feugiat lectus. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Etiam ut tortor ante. Vestibulum egestas sapien
              nunc, at varius quam convallis ut. Nulla tincidunt ante quam, ac
              auctor purus volutpat eget. Donec eu arcu at neque iaculis
              tristique. Aenean eget consectetur dolor. Etiam a dignissim quam,
              vitae ultrices felis. Nunc ipsum justo, laoreet dictum quam vel,
              dictum fringilla arcu. Nunc mattis sit amet sapien et vestibulum.
              Pellentesque aliquet quam in diam finibus tincidunt. Donec orci
              lacus, pharetra sed malesuada nec, maximus vel diam. Vivamus sit
              amet feugiat urna. Cras consequat finibus laoreet. Ut blandit quis
              est eu convallis. Nullam at pellentesque mi, id rutrum velit.
              Vestibulum in lectus ac nunc iaculis facilisis sed a magna. Sed
              imperdiet velit tellus, vel molestie nibh dapibus eget. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
              justo pharetra, molestie risus sit amet, euismod libero. Nunc
              mattis augue risus, vel pellentesque nibh pellentesque in. Vivamus
              in metus fringilla justo faucibus viverra. Aenean auctor sapien
              justo, a vehicula diam auctor et. Donec id pellentesque diam,
              placerat pharetra sem. Ut nec felis sed diam laoreet laoreet eu
              sed nisi. Donec in accumsan justo. Morbi vel nunc feugiat, rutrum
              tortor ac, commodo diam. Nunc consequat in dui a ultricies.
            </p>
          </div>
          <div className="Interacciones">
            <p className="com">2 comentarios</p>
            <div className="Like">
              <p>2</p>
              <img src="\src\assets\img\Corazon.png" alt="like" />
            </div>
          </div>
          <div className="AgregarCom">
            <form className="Formulario" action="Agregarnuevo">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Escribe un nuevo comentario"
              ></textarea>
              <div className="Botones">
                <input id="Publicar" type="submit" value={"Publicar"} />
              </div>
            </form>
          </div>
          <div className="Comentarios">
            <img src="\src\assets\img\perfil.jpg" alt="" />
            <div className="Comentario">
              <h4>Rubius</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae repudiandae ipsum veritatis eos dolor maiores
                voluptas. Molestiae debitis adipisci deserunt cupiditate,
                molestias qui repudiandae nam eligendi nihil minus unde optio?
              </p>
            </div>
          </div>
          <div className="Comentarios">
            <img src="\src\assets\img\perfil.jpg" alt="" />
            <div className="Comentario">
              <h4>AuronPlay</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae repudiandae ipsum veritatis eos dolor maiores
                voluptas. Molestiae debitis adipisci deserunt cupiditate,
                molestias qui repudiandae nam eligendi nihil minus unde optio?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Noticia;
