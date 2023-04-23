import { Link } from "react-router-dom";
import '../assets/css/Nosotros.css'
import M1 from '../assets/img/1-2.png'
import M2 from '../assets/img/3-3.png'

const MisVis = () => {
    return(
        <div className="ConMV">
            <div  data-aos="fade-right" className="conMis">
                <div>
                    <h2 className="MV">Misión</h2>
                    <p className="MVT">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type
                    specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged.</p>
                </div>
                <img src={M1} alt="" />
            </div>
            <div  data-aos="fade-left" className="conVis">
                <div>
                    <h2 className="MV">Visión</h2>
                    <p className="MVT">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type
                    specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged.
                    </p>  
                </div>
                <img src={M2} alt="" />
            </div>
        </div>
    );
}

export default MisVis;