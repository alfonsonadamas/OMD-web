import Footer from "../components/Footer";
import '../assets/css/login.css'
import { useEffect, useState } from 'react';
import { register } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import { getAuth, sendEmailVerification } from "firebase/auth";

const RegistroCorreo = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [passwordConfirm, setpasswordConfirm] = useState("")
  const navigate = useNavigate();
  const auth = getAuth();

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
      
      const userCredential = await register({email, password})
      await sendEmailVerification(userCredential.user).then(() => {
        // Email verification sent!
        // ...
      });
      navigate('/registroUsuario')
    } catch (error) {
      console.log(error)
    }
  }


  return(
    <div>
      <div data-aos="fade-up" className="register_form">
        <div className="register_img">
          <img src="../src/assets/img/OMD_logo(copy).png" alt="" />
        </div>

        <div className="register_tittle">
          <h2>SE PARTE DE NOSOTROS</h2>
          <h3>PRE-REGISTRO</h3>
          <p>Paso 1: </p>
        </div>
        
        <form onSubmit={password === passwordConfirm ? handleSubmit : null}>  
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

          <div className="input_form">
            <input type="password" placeholder="Confirmar Contraseña" value={passwordConfirm} onChange={e => setpasswordConfirm(e.target.value)}/>
            
            <div className="input_icon">
              <img src="../src/assets/img/candado.png" alt="" />
            </div>
            
          </div>

          {
            password !== passwordConfirm && <p className="error">Las contraseñas no coinciden</p>
          }
          
          <button className="button_sbt_register" type="submit">Siguiente</button>
        </form>

      </div>
      <Footer />
    </div>
  )
}

export default RegistroCorreo;
