import logoOMD from "../assets/img/OMD_logo.png";
import perfil from "../assets/img/perfil.jpg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Galerial from "../components/Galeria";
import GaleriaEnc from "../components/GaleriaEnc";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import OMDLogo from "../assets/img/OMD_blanco.png";
import "../assets/css/Galeria.css";
import { useEffect, useState } from "react";
import { useFirestore } from "../config/useFirestore";
import Spinner from "../components/Spinner";

const Galeria = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const [show7, setShow7] = useState(false);
  const [show8, setShow8] = useState(false);

  const {
    data,
    data2,
    data3,
    data4,
    data5,
    data6,
    data7,
    data8,
    getGaleria,
    loading,
  } = useFirestore();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);

  const handleClose5 = () => setShow5(false);
  const handleShow5 = () => setShow5(true);

  const handleClose6 = () => setShow6(false);
  const handleShow6 = () => setShow6(true);

  const handleClose7 = () => setShow7(false);
  const handleShow7 = () => setShow7(true);

  const handleClose8 = () => setShow8(false);
  const handleShow8 = () => setShow8(true);

  useEffect(() => {
    getGaleria();
  }, []);

  if (loading) return <Spinner></Spinner>;
  return (
    <div>
      <Navbar img={logoOMD} perfil={perfil}></Navbar>
      <GaleriaEnc />
      <div data-aos="fade-right" className="Contenedor">
        <div data-aos="fade-right" className="Contenedor">
          {data.map((item) => (
            <div>
              <div className="Cont_Imag">
                <img
                  variant="primary"
                  onClick={handleShow}
                  src={item.imagen}
                  className="Imagen"
                  alt=""
                />
              </div>
              <Modal
                centered
                aria-labelledby="contained-modal-title-vcenter"
                show={show}
                onHide={handleClose}
                animation={false}
              >
                <Modal.Body>
                  <div>
                    <h3>{item.titulo}</h3>
                    <p>{item.texto}</p>
                  </div>
                  <img className="imagen_Modal" src={item.imagen} alt="" />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          ))}

          {data2.map((item) => (
            <div>
              <div className="Cont_Imag">
                <img
                  variant="primary"
                  onClick={handleShow2}
                  src={item.imagen}
                  className="Imagen"
                  alt=""
                />
              </div>
              <Modal
                centered
                aria-labelledby="contained-modal-title-vcenter"
                show={show2}
                onHide={handleClose2}
                animation={false}
              >
                <Modal.Body>
                  <div>
                    <h3>{item.titulo}</h3>
                    <p>{item.texto}</p>
                  </div>
                  <img className="imagen_Modal" src={item.imagen} alt="" />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose2}>
                    Cerrar
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          ))}

          {data3.map((item) => (
            <div>
              <div className="Cont_Imag">
                <img
                  variant="primary"
                  onClick={handleShow3}
                  src={item.imagen}
                  className="Imagen"
                  alt=""
                />
              </div>
              <Modal
                centered
                aria-labelledby="contained-modal-title-vcenter"
                show={show3}
                onHide={handleClose3}
                animation={false}
              >
                <Modal.Body>
                  <div>
                    <h3>{item.titulo}</h3>
                    <p>{item.texto}</p>
                  </div>
                  <img className="imagen_Modal" src={item.imagen} alt="" />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose3}>
                    Cerrar
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          ))}

          {data4.map((item) => (
            <div>
              <div className="Cont_Imag">
                <img
                  variant="primary"
                  onClick={handleShow4}
                  src={item.imagen}
                  className="Imagen"
                  alt=""
                />
              </div>
              <Modal
                centered
                aria-labelledby="contained-modal-title-vcenter"
                show={show4}
                onHide={handleClose4}
                animation={false}
              >
                <Modal.Body>
                  <div>
                    <h3>{item.titulo}</h3>
                    <p>{item.texto}</p>
                  </div>
                  <img className="imagen_Modal" src={item.imagen} alt="" />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose4}>
                    Cerrar
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          ))}

          {data5.map((item) => (
            <div>
              <div className="Cont_Imag">
                <img
                  variant="primary"
                  onClick={handleShow5}
                  src={item.imagen}
                  className="Imagen"
                  alt=""
                />
              </div>
              <Modal
                centered
                aria-labelledby="contained-modal-title-vcenter"
                show={show5}
                onHide={handleClose5}
                animation={false}
              >
                <Modal.Body>
                  <div>
                    <h3>{item.titulo}</h3>
                    <p>{item.texto}</p>
                  </div>
                  <img className="imagen_Modal" src={item.imagen} alt="" />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose5}>
                    Cerrar
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          ))}

          {data6.map((item) => (
            <div>
              <div className="Cont_Imag">
                <img
                  variant="primary"
                  onClick={handleShow6}
                  src={item.imagen}
                  className="Imagen"
                  alt=""
                />
              </div>
              <Modal
                centered
                aria-labelledby="contained-modal-title-vcenter"
                show={show6}
                onHide={handleClose6}
                animation={false}
              >
                <Modal.Body>
                  <div>
                    <h3>{item.titulo}</h3>
                    <p>{item.texto}</p>
                  </div>
                  <img className="imagen_Modal" src={item.imagen} alt="" />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose6}>
                    Cerrar
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          ))}
          {data7.map((item) => (
            <div>
              <div className="Cont_Imag">
                <img
                  variant="primary"
                  onClick={handleShow7}
                  src={item.imagen}
                  className="Imagen"
                  alt=""
                />
              </div>
              <Modal
                centered
                aria-labelledby="contained-modal-title-vcenter"
                show={show7}
                onHide={handleClose7}
                animation={false}
              >
                <Modal.Body>
                  <div>
                    <h3>{item.titulo}</h3>
                    <p>{item.texto}</p>
                  </div>
                  <img className="imagen_Modal" src={item.imagen} alt="" />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose7}>
                    Cerrar
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          ))}

          {data8.map((item) => (
            <div>
              <div className="Cont_Imag">
                <img
                  variant="primary"
                  onClick={handleShow8}
                  src={item.imagen}
                  className="Imagen"
                  alt=""
                />
              </div>
              <Modal
                centered
                aria-labelledby="contained-modal-title-vcenter"
                show={show8}
                onHide={handleClose8}
                animation={false}
              >
                <Modal.Body>
                  <div>
                    <h3>{item.titulo}</h3>
                    <p>{item.texto}</p>
                  </div>
                  <img className="imagen_Modal" src={item.imagen} alt="" />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose8}>
                    Cerrar
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Galeria;
