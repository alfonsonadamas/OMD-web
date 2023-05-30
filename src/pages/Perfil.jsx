import { auth, db, login, logout } from "../config/firebase";
import Navbar from "../components/Navbar";
import "../assets/css/perfil.css";
import logoOMD from "../assets/img/OMD_logo.png";
import perfil from "../assets/img/perfil.jpg";
import Login from "../pages/Login";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useFirestore } from "../config/useFirestore";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import { BlobProvider } from "@react-pdf/renderer";
import DocumentoPerfil from "../components/DocumentoPerfil";
import QRCode from "react-qr-code";
import PDF from "../components/PDF";
import Button from "react-bootstrap/Button";
import Alert from 'react-bootstrap/Alert';
import Modal from "react-bootstrap/Modal";

const Perfil = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const {
    data,
    error,
    loading,
    getUser,
    exist,
    getCompany,
    existCompany,
    dataCompany,
  } = useFirestore();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getUser();
    getCompany();
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

  if (loading) return <Spinner></Spinner>;
  if (error) return <p>{error}</p>;
  if (!exist) navigate("/verificacionCorreo");

  return (
    <div>
      <Navbar img={logoOMD} perfil={perfil} />
      {data.map((item) =>
        item.verificado ? (
          <div className="info_personal" data-aos="fade-up">
            <div className="titulo_perfil">
              <h2>
                Información <span>General</span>
              </h2>
              <button onClick={handleLogout}>Cerrar Sesion</button>
            </div>
            <div className="info_general">
              <div className="foto_perfil">
                {auth.currentUser.photoURL == null ? (
                  <img src="../src/assets/img/perfil.jpg" alt="" />
                ) : (
                  <img src={auth.currentUser.photoURL} alt="" />
                )}

                <div>
                  <button onClick={handleShow}>Generar QR</button>
                </div>

                <Modal show={show} onHide={handleClose} centered>
                  <Modal.Header closeButton>
                    <Modal.Title>QR Generado</Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="modal_">
                    <QRCode
                      value={`http://localhost:5173/document/${item.nombre}/${item.apellidoPaterno}/${item.apellidoMaterno}/${item.email}/${item.fechaNacimiento}`}
                    />
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Cerrar
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
              <div className="borde"></div>
              <div className="info_perfil">
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

                {/* <button>Editar</button> */}
                <Link to={"/editarPerfil"} className="btn_editar">
                  Editar
                </Link>
              </div>
            </div>

            <div className=" info_empresa" data-aos="fade-up">
              <div className="titulo_empresa">
                <h2>
                  Información de <span>Empresa</span>
                </h2>
              </div>
              {existCompany ? (
                <div>
                  {dataCompany.map((company) => (
                    <div className="info_general">
                      <div className="foto_perfil">
                        <img src={company.logo} alt="" />
                      </div>
                      <div className="borde"></div>
                      <div className="info_perfil">
                        <div key={company.id}>
                          <p>
                            Nombre: <span>{company.nombreCompañia}</span>{" "}
                          </p>
                          <p>
                            Ubicación: <span>{company.ubicacion}</span>
                          </p>
                          <p>
                            Telefono: <span>{company.telefono}</span>
                          </p>
                          <p>
                            Correo Electronico:{" "}
                            <span>{company.correoEmpresa}</span>
                          </p>
                          <p>
                            Sobre la empresa:{" "}
                            <span>{company.sobreEmpresa}</span>
                          </p>
                        </div>

                        {/* <button>Editar</button> */}
                        <Link
                          to={"/editarEmpresa"}
                          className="btn_editarEmpresa"
                        >
                          Editar
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="registroEmpresa">
                  <Link to={"/registrarEmpresa"} className="linkRegistroEmp">
                    + | Agregar una Empresa
                  </Link>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div>
          <Alert key="danger" variant="danger">
            <Alert.Heading>No estas verificado...</Alert.Heading>
            <p>Por favor espera a que los administradores te verifiquen. Para cualquier aclaración, acudir al siguiente correo</p>
            <a href="mailto:organizacionomd@gmail.com?Subject=Solicitud%20de%20verificación">organizacionomd@gmail.com</a>
        </Alert>
          </div>
        )
      )}
    </div>
  );
};

export default Perfil;
