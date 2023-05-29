import logoOMD from '../assets/img/OMD_logo.png'
import perfil from '../assets/img/perfil.png'
// ----------------------------------------
import Navbar from '../components/Navbar'
import Slider from '../components/Carrusel'
import Body from '../components/Body'
import Fortalecimientos from '../components/Fortalecimientos'
import Calendar from '../components/Calendar'
import Footer from '../components/Footer'
import Formulario from '../components/Form'
import CarruselAfiliados from '../components/CarruselAfiliados'

const Main = () => {
    return(
        <div>
            <Navbar 
            img = {logoOMD}
            perfil = {perfil}
            ></Navbar>
            <Slider></Slider>
            <Body></Body>
            <Fortalecimientos></Fortalecimientos>
            <Calendar></Calendar>
            <CarruselAfiliados></CarruselAfiliados>
            <Formulario></Formulario>
            <Footer></Footer>
        </div>
        
    )
}

export default Main;