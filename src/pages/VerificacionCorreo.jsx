import { useNavigate, useParams } from "react-router-dom";
import { auth } from "../config/firebase";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const VerificacionCorreo = () => {
  const navigate = useNavigate();

  useEffect(() => {
    load();
  });

  const load = async () => {
    try {
      if (auth.currentUser.emailVerified) {
        navigate("/registroUsuario");
        console.log("email verificado");
      } else {
        console.log("email no verificado");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="verif">
      <div className="anuncio_verif">
        <h1>Verificacion de correo en curso</h1>
        <p>Por favor verifica tu correo electronico antes de continuar</p>
        <div class="spinner"></div>
        <Link className="butn" to={"/"}>
          Regresar a Inicio
        </Link>
      </div>
    </div>
  );
};

export default VerificacionCorreo;
