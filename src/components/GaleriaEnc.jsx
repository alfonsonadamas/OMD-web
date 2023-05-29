import { Link } from "react-router-dom";
import OMDLogo from '../assets/img/OMD_blanco.png'
import '../assets/css/Galeria.css'



const GaleriaEnc = () => {
    return(
        <div className="Cont">
            <div className="contlogo">
                <img className="ImgLogo" src={OMDLogo} alt="" />
            </div>
                <span></span>
            <div className="contFrase">
                <h2>"Se triunfa con lo que se aprende"</h2>
            </div>



        </div>
);
}

export default GaleriaEnc;