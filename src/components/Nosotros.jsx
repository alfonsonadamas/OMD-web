import { Link } from "react-router-dom";
import "../assets/css/nosotros.css";

const QuienesSomos = (nosotros) => {
  return (
    <div className="contenedor">
      <div className="nosotros">
        <h2>¿QUIÉNES SOMOS?</h2>
        <p>{nosotros.texto}</p>
      </div>

      <img src={nosotros.imagen} alt="" />
    </div>
  );
};

export default QuienesSomos;
