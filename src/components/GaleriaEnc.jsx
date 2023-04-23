import { Link } from "react-router-dom";
import OMDLogo from '../assets/img/OMD_blanco.png'
import '../assets/css/Galeria.css'



const GaleriaEnc = () => {
    return(
        <div className="Cont">
            <img className="ImgLogo" src={OMDLogo} alt="" />
            <span></span>
            <h2>"Se triunfa con lo que se aprende"</h2>
        </div>
);
}

export default GaleriaEnc;