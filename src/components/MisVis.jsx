import { Link } from "react-router-dom";
import "../assets/css/Nosotros.css";
import M1 from "../assets/img/1-2.png";
import M2 from "../assets/img/3-3.png";

const MisVis = (nosotros) => {
  return (
    <div className="ConMV">
      <div data-aos="fade-right" className="conMis">
        <div>
          <h2 className="MV">Misión</h2>
          <p className="MVT">{nosotros.mision}</p>
        </div>
        <img src={M1} alt="" />
      </div>

      <div data-aos="fade-left" className="conVis">
        <div>
          <h2 className="MV">Visión</h2>
          <p className="MVT">{nosotros.vision}</p>
        </div>
        <img src={M2} alt="" />
      </div>
    </div>
  );
};

export default MisVis;
