import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import OMDLogo from '../assets/img/OMD_blanco.png'
import '../assets/css/Galeria.css'
import { useState } from "react";

const Galeria = () => {
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    const [show6, setShow6] = useState(false);
    const [show7, setShow7] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClose2 = () => setShow1(false);
    const handleShow2 = () => setShow1(true);
    const handleClose3 = () => setShow2(false);
    const handleShow3 = () => setShow2(true);
    const handleClose4 = () => setShow3(false);
    const handleShow4 = () => setShow3(true);
    const handleClose5 = () => setShow4(false);
    const handleShow5 = () => setShow4(true);
    const handleClose6 = () => setShow5(false);
    const handleShow6 = () => setShow5(true);
    const handleClose7 = () => setShow6(false);
    const handleShow7 = () => setShow6(true);
    const handleClose8 = () => setShow7(false);
    const handleShow8 = () => setShow7(true);

    return(        
        <div data-aos="fade-right" className="Contenedor">
            <div className="Cont_Imag">
                <img variant="primary" onClick={handleShow} src="../src/assets/img/EquipoOMD.jpg" className="Imagen" alt="" />
            </div>
            <div className="Cont_Imag">
                <img variant="primary" onClick={handleShow2} src="../src/assets/img/body.jpg" className="Imagen" alt="" />
            </div>
            <div className="Cont_Imag">
                <img variant="primary" onClick={handleShow3} src="../src/assets/img/Arturo.jpg" className="Imagen" alt="" />
            </div>
            <div className="Cont_Imag">
                <img variant="primary" onClick={handleShow4} src="../src/assets/img/fortalecimiento_eco.jpg" className="Imagen" alt="" />
            </div>
            <div className="Cont_Imag">
                <img variant="primary" onClick={handleShow5} src="../src/assets/img/fortalecimiento_emo.jpg" className="Imagen" alt="" />
            </div>
            <div className="Cont_Imag">
                <img variant="primary" onClick={handleShow6} src="../src/assets/img/login.jpg" className="Imagen" alt="" />
            </div>
            <div className="Cont_Imag">
                <img variant="primary" onClick={handleShow7} src="../src/assets/img/slide_1.jpg" className="Imagen" alt="" />
            </div>
            <div className="Cont_Imag">
                <img variant="primary" onClick={handleShow8} src="../src/assets/img/slide_3.jpg" className="Imagen" alt="" />
            </div>


            <Modal centered  aria-labelledby="contained-modal-title-vcenter" show={show} onHide={handleClose} animation={false}>

                <Modal.Body>
                    <div>
                        <h3>Item1</h3>
                        <p>Woohoo, you're reading this text in a modal!</p>
                    </div>
                    <img className="imagen_Modal" src="../src/assets/img/EquipoOMD.jpg" alt="" />
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
                </Modal.Footer>
            </Modal>

            <Modal centered  aria-labelledby="contained-modal-title-vcenter" show={show1} onHide={handleClose2} animation={false}>

                <Modal.Body>
                    <div>
                        <h3>Item2</h3>
                        <p>Woohoo, you're reading this text in a modal!</p>
                    </div>
                    <img className="imagen_Modal" src="../src/assets/img/body.jpg" alt="" />
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose2}>
                    Cerrar
                </Button>
                </Modal.Footer>
            </Modal>
            <Modal centered  aria-labelledby="contained-modal-title-vcenter" show={show2} onHide={handleClose3} animation={false}>

                <Modal.Body>
                    <div>
                        <h3>Item3</h3>
                        <p>Woohoo, you're reading this text in a modal!</p>
                    </div>
                    <img className="imagen_Modal" src="../src/assets/img/Arturo.jpg" alt="" />
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose3}>
                    Cerrar
                </Button>
                </Modal.Footer>
            </Modal>
            <Modal centered  aria-labelledby="contained-modal-title-vcenter" show={show3} onHide={handleClose4} animation={false}>

                <Modal.Body>
                    <div>
                        <h3>Item4</h3>
                        <p>Woohoo, you're reading this text in a modal!</p>
                    </div>
                    <img className="imagen_Modal" src="../src/assets/img/fortalecimiento_eco.jpg" alt="" />
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose4}>
                    Cerrar
                </Button>
                </Modal.Footer>
            </Modal>
            <Modal centered  aria-labelledby="contained-modal-title-vcenter" show={show4} onHide={handleClose5} animation={false}>

                <Modal.Body>
                    <div>
                        <h3>Item5</h3>
                        <p>Woohoo, you're reading this text in a modal!</p>
                    </div>
                    <img className="imagen_Modal" src="../src/assets/img/fortalecimiento_emo.jpg" alt="" />
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose5}>
                    Cerrar
                </Button>
                </Modal.Footer>
            </Modal>
            <Modal centered  aria-labelledby="contained-modal-title-vcenter" show={show5} onHide={handleClose6} animation={false}>

                <Modal.Body>
                    <div>
                        <h3>Item6</h3>
                        <p>Woohoo, you're reading this text in a modal!</p>
                    </div>
                    <img className="imagen_Modal" src="../src/assets/img/login.jpg" alt="" />
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose6}>
                    Cerrar
                </Button>
                </Modal.Footer>
            </Modal>
            <Modal centered  aria-labelledby="contained-modal-title-vcenter" show={show6} onHide={handleClose7} animation={false}>

                <Modal.Body>
                    <div>
                        <h3>Item7</h3>
                        <p>Woohoo, you're reading this text in a modal!</p>
                    </div>
                    <img className="imagen_Modal" src="../src/assets/img/slide_1.jpg" alt="" />
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose7}>
                    Cerrar
                </Button>
                </Modal.Footer>
            </Modal>
            <Modal centered  aria-labelledby="contained-modal-title-vcenter" show={show7} onHide={handleClose8} animation={false}>

                <Modal.Body>
                    <div>
                        <h3>Item8</h3>
                        <p>Woohoo, you're reading this text in a modal!</p>
                    </div>
                    <img className="imagen_Modal" src="../src/assets/img/slide_3.jpg" alt="" />
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose8}>
                    Cerrar
                </Button>
                </Modal.Footer>
            </Modal>

        </div>
    );
}



export default Galeria;