import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import '../assets/css/login.css'
import { useEffect, useState } from 'react';
import { login } from '../config/firebase';
import { useUserContext } from "../context/UserContext";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  
  const navigate = useNavigate();
  const {user} = useUserContext();

  useEffect(() => {
    if(user){
      navigate('/perfil')
    }
  })

  const handleSubmit = async(e) =>{
    e.preventDefault();
    try {
      await login({email,password});
    } catch (error) {
      console.log(error)
    }
    
  }


  return (
    <div>
      
      <div className="login" data-aos="fade-up">
      <div className="form_login">
        <Link to= '/'><img src="../src/assets/img/OMD_logo(copy).png" alt="" /></Link>
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="input_form">
            <input type="text" placeholder="Correo Electronico" value={email} onChange={e => setEmail(e.target.value)}/>
            <div className="input_icon">
              <img src="../src/assets/img/user.png" alt="" />
            </div>
            
          </div>
          
          <div className="input_form">
            <input type="password" placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)}/>
            <div className="input_icon">
              <img src="../src/assets/img/candado.png" alt="" />
            </div>
            
          </div>
          <div className="fg_password">
            <Link className="fg_password">Olvidaste tu contraseña?</Link>
          </div>
          
          <button className="button_sbt" type="submit">Iniciar Sesion</button>
        </form>

        <p className='link_register'>Necesitas una cuenta? <Link to="/registro" className='register'>Registrate</Link></p>
      </div>

      <div className="login_img">
        <img src="../src/assets/img/login.jpg" alt="" />
      </div>

      </div>
      <Footer />
    </div>
    
  )
}

export default Login;