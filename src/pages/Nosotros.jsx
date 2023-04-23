import logoOMD from '../assets/img/OMD_logo.jpg'
import perfil from '../assets/img/perfil.jpg'
// ----------------------------------------
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import QuienesSomos from '../components/Nosotros'
import Representantes from '../components/Representantes'
import Video from '../components/VideoNos'
import MisVis from '../components/MisVis'
import Fabiola from '../assets/img/Fab.jpg'
import Artur from '../assets/img/Arturo.jpg'

const Nosotros = () =>{
    return(
        <div>
            <Navbar
                img = {logoOMD}
                perfil={perfil}>
            </Navbar>
            <QuienesSomos/>
            <Representantes
                per = {'one'}
                sex = {'Ella'}
                nombre = {'Fabiola'}
                quienes = {'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing'}
                fotor = {Fabiola}
            ></Representantes>
            <Representantes
                per = {'two'}
                sex = {'El'}
                nombre = {'Arturo'}
                quienes = {'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing'}
                fotor = {Artur}
            ></Representantes>
            <Video></Video>
            <MisVis/>
            <Footer></Footer>
        </div>
    )
}

export default Nosotros;