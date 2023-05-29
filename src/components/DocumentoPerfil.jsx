import { useParams } from "react-router-dom";
import logoOMD from "../assets/img/OMD_logo.png";
import perfil from "../assets/img/perfil.png";
import "../assets/css/document.css";

const DocumentoPerfil = () => {
  let { name, apellidoP, apellidoM, email, fechaNacimiento, fotoPerfil } =
    useParams();
  return (
    <div className="document_">
      <img src={logoOMD} alt="" />
      <div className="document_info">
        <img src={perfil} alt="" />
        <p>
          Nombre: <span>{name}</span>
        </p>
        <p>
          Apellido Paterno: <span>{apellidoP}</span>
        </p>
        <p>
          Apellido Materno: <span>{apellidoM}</span>
        </p>
        <p>
          Correo: <span>{email}</span>
        </p>
        <p>
          Fecha nacimiento: <span>{fechaNacimiento}</span>
        </p>
      </div>
    </div>
  );
};

export default DocumentoPerfil;
