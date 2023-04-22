import logoOMD from '../assets/img/OMD_logo.jpg'
import perfil from '../assets/img/perfil.jpg'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FortalecimientosCarrusel from '../components/FortalecimientosCarrusel';

const Fortalecimientos = () =>{
    return (
        <div>
            <Navbar 
                img = {logoOMD}
                perfil = {perfil}
            ></Navbar>
            <FortalecimientosCarrusel></FortalecimientosCarrusel>
            <Footer></Footer>
        </div>
    )
}

export default Fortalecimientos;