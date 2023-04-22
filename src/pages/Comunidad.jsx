import logoOMD from '../assets/img/OMD_logo.jpg'
import perfil from '../assets/img/perfil.jpg'
// ----------------------------------------
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import InfoComunidad from '../components/InfoComunidad'
import CarruselEmpresas from '../components/CarruselEmpresas'
import BeneficiosComunidad from '../components/BeneficiosComunidad'

const Comunidad = () =>{
    return (
        <div>
            <Navbar 
                img = {logoOMD}
                perfil = {perfil}
            ></Navbar>
            <div className="comunidad">
                <h2><span>Unete</span> a nostros</h2>
            </div>
            <InfoComunidad
                tipo = {'Empresas'}
                clase = {'rosa'}
                tituloCarrusel = {'Empresas Afiliadas'}
            ></InfoComunidad>
            <CarruselEmpresas></CarruselEmpresas>
            <BeneficiosComunidad
                pregunta = {'¿POR QUE AFILIAR TU EMPRESA CON NOSOTROS?'}
                clase = {'rosa'}
            ></BeneficiosComunidad>
            <InfoComunidad
                tipo = {'Aliados'}
                clase = {'verde'}
                tituloCarrusel = {'Nuestras Alianzas'}
            ></InfoComunidad>
            <CarruselEmpresas></CarruselEmpresas>
            <BeneficiosComunidad
                pregunta = {'¿POR QUE ALIARTE CON NOSOTROS?'}
                clase = {'verde'}
            ></BeneficiosComunidad>
            <Footer></Footer>
        </div>
    )
}

export default Comunidad