import logoOMD from '../assets/img/OMD_logo.jpg'
import perfil from '../assets/img/perfil.jpg'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NoticiaI from '../components/Noticia';

const Noticia = () =>{
    return (
        <div>
            <Navbar 
                img = {logoOMD}
                perfil = {perfil}
            ></Navbar>
            <NoticiaI></NoticiaI>
            <Footer></Footer>
        </div>
    )
}

export default Noticia;