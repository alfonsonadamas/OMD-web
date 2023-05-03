import { db, login, logout } from "../config/firebase";
import Navbar from "../components/Navbar";
import "../assets/css/perfil.css";
import logoOMD from "../assets/img/OMD_logo.jpg";
import perfil from "../assets/img/perfil.jpg";
import Login from "../pages/Login";
import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { useFirestore } from "../config/useFirestore";
import { useNavigate } from "react-router-dom";

const Perfil = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  if (!user) {
    return <Login />;
  }

  const { data, error, loading, getUser, exist } = useFirestore();
  useEffect(() => {
    getUser();
  }, []);

  if (loading) return <p>Cargando Datos</p>;
  if (error) return <p>{error}</p>;
  if (!exist) navigate("/verificacionCorreo");

  return (
    <div>
      <Navbar img={logoOMD} perfil={perfil} />

      <div className="info_personal">
        <div className="titulo_perfil">
          <h2>
            Informacion <span>General</span>
          </h2>
          <button onClick={handleLogout}>Cerrar Sesion</button>
        </div>
        <div className="info_general">
          <div className="foto_perfil">
            <img src="../src/assets/img/perfil.png" alt="" />
            <button>Generar QR</button>
          </div>
          <div className="borde"></div>
          <div className="info_perfil">
            {data.map((item) => (
              <div key={item.id}>
                <p>
                  Nombre: <span>{item.nombre}</span>{" "}
                </p>
                <p>
                  Apellido Paterno: <span>{item.apellidoPaterno}</span>
                </p>
                <p>
                  Apellido Materno: <span>{item.apellidoMaterno}</span>
                </p>
                <p>
                  Correo Electronico: <span>{item.email}</span>
                </p>
                <p>
                  Fecha de Nacimiento: <span>{item.fechaNacimiento}</span>
                </p>
              </div>
            ))}

            <button>Editar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
