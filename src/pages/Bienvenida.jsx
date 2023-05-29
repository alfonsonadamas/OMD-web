import { Link } from "react-router-dom";
import "../assets/css/bienvenida.css";

const Bienvenida = () => {
  return (
    <div className="bienvenida" data-aos="fade-up">
      <div className="bienvenida_tarjeta">
        <h2>BIENVENIDO</h2>
        <div className="sub">ㅤ</div>
        <div className="bienvenida_tarjeta_imagen">
          <img src="../src/assets/img/OMD_blanco.png" alt="" />
        </div>
        <h3>Gracias por formar parte de nuestra organizacion</h3>
        <Link className="btn_bienvenida" to={"/login"}>
          Ver Perfil
        </Link>
      </div>
    </div>
  );
};

export default Bienvenida;
