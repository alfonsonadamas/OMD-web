import { db, login, logout } from "../config/firebase";
import Navbar from "../components/Navbar";
import "../assets/css/perfil.css";
import logoOMD from "../assets/img/OMD_logo.png";
import perfil from "../assets/img/perfil.jpg";
import Login from "../pages/Login";
import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { useFirestore } from "../config/useFirestore";
import { useNavigate } from "react-router-dom";

const EditarPerfil = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const { data, error, loading, getUser, exist } = useFirestore();

  useEffect(() => {
    getUser();
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  if (!user) {
    return <Login />;
  }

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
        {data.map((item) =>
          item.verificado ? (
            <form action="">
              <div className="info_general">
                <div className="foto_perfil">
                  <img src="../src/assets/img/perfil.png" alt="" />
                  <input type="file" />
                </div>
                <div className="borde"></div>
                <div className="info_perfil">
                  {data.map((item) => (
                    <div key={item.id}>
                      <p>
                        Nombre: <input type="text" value={item.nombre} />
                      </p>
                      <p>
                        Apellido Paterno:
                        <input type="text" value={item.apellidoPaterno} />
                      </p>
                      <p>
                        Apellido Materno:
                        <input type="text" value={item.apellidoMaterno} />
                      </p>
                      <p>
                        Correo Electronico:{" "}
                        <input type="text" value={item.email} />
                      </p>
                      <p>
                        Fecha de Nacimiento:{" "}
                        <input type="text" value={item.fechaNacimiento} />
                      </p>
                    </div>
                  ))}

                  <button className="btn_editar">Guardar</button>
                </div>
              </div>
            </form>
          ) : (
            <div>No estas verificado</div>
          )
        )}
      </div>
    </div>
  );
};

export default EditarPerfil;
