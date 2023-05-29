import logoOMD from '../assets/img/OMD_logo.jpg'
import perfil from '../assets/img/perfil.jpg'
import CapacitacionCinto from '../components/CapacitacionCinto';
import CapacitacionCuerpo from '../components/CapacitacionCuerpo';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Capacitacion = () => {
    return(
        <div>
        <Navbar
            img = {logoOMD}
            perfil={perfil}
        ></Navbar>
        <CapacitacionCinto/>
        <CapacitacionCuerpo/>
        <Footer/>
        </div>
    );
}

export default Capacitacion;