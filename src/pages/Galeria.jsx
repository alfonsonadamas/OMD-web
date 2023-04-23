import logoOMD from '../assets/img/OMD_logo.jpg'
import perfil from '../assets/img/perfil.jpg'
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Galerial from '../components/Galeria';
import GaleriaEnc from '../components/GaleriaEnc';

const Galeria = () => {
    return(
        <div>
        <Navbar
            img = {logoOMD}
            perfil={perfil}
        ></Navbar>
        <GaleriaEnc/>
        <Galerial/>
        <Footer/>
        </div>
    );
}

export default Galeria;