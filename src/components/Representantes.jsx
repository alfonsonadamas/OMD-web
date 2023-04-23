import { Link } from "react-router-dom";
import '../assets/css/Representantes.css'

const Representantes = ({sex, per, nombre, quienes, fotor}) => {
    return (
        <div className={"num_" + per} data-aos="fade-right">
            <div className="num_con">
                <h2>{sex} es <span>{nombre}...</span></h2>
                <p>{quienes}</p>
            </div>
            <img src={fotor} alt="" />
        </div>
    );
}

export default Representantes;