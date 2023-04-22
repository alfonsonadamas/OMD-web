import { Link } from "react-router-dom";
import '../assets/css/comunidad.css'

const InfoComunidad = ({tipo, clase, tituloCarrusel}) => {
    return(
        <div >
            
            
            <div className="banner_inicio">
                
                <div className="banner_img">
                    <img src="../src/assets/img/comunidad.jpg" alt="" />
                </div>
                
                <div className="banner_info">
                    
                    <h3>Para {tipo}</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
                    </p>
                    <Link className={'registro '+clase}>PRE-REGISTRO</Link>
                    
                </div>
            </div>
            <h2 className="empresa">{tituloCarrusel}</h2>
        </div>
    )
}

export default InfoComunidad;