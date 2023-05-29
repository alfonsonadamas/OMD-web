import { Link } from "react-router-dom";
import '../assets/css/nosotros.css'

const QuienesSomos = () =>  {
    return(
        <div className="contenedor" >
            <div className="nosotros">
                <h2>¿QUIÉNES SOMOS?</h2>
                <p>Somos un órgano autónomo e independiente
                de vinculación, es decir, una suma de
                voluntades con personas, empresas públicas,
                privadas y organizaciones sociales, enfocadas
                en generar proyectos que promuevan el
                desarrollo, bienestar y crecimiento de la mujer
                y su familia.</p>
            </div>

         
            <img src="../src/assets/img/EquipoOMD.jpg" alt="" />
             
        </div>

    )
}

export default QuienesSomos;