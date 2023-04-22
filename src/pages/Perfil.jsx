import { logout } from "../config/firebase"
import Navbar from "../components/Navbar" 
import '../assets/css/perfil.css'
import logoOMD from '../assets/img/OMD_logo.jpg'
import perfil from '../assets/img/perfil.jpg'
import Login from '../pages/Login'
import { useContext } from "react"
import { UserContext } from "../context/UserContext"

const Perfil = () => {

  const {user} = useContext(UserContext);

  
  const handleLogout = async () =>{
    try {
      await logout();
    } catch (error) {
      console.log(error)
    }
  }
    if(user === null){
      return <Login/>
    }
  return <div>
    <Navbar 
        img = {logoOMD}
        perfil = {perfil}
    />
    
    <div className="info_personal">
        <h2>Informacion <span>General</span></h2>
        <button onClick={handleLogout}>Cerrar Sesion</button>   
        <div className="info_general">
            <div className="foto_perfil">
                
                <img src="../src/assets/img/perfil.png" alt="" />
                <button>Generar QR</button>
            </div>
            <div className="borde">

            </div>
            <div className="info_perfil">
                <p>Nombre:</p>
                <p>Apellido Paterno:</p>
                <p>Apellido Materno:</p>
                <p>Correo Electronico: <span></span></p>
                <p>Fecha de Nacimiento:</p>
                
                <button>Editar</button>
            </div>
        </div>
    </div>
  
    
  </div>
}

export default Perfil;
