import { useEffect, useState } from "react";
import "../assets/css/capacitacionesStyle.css";
import { useFirestore } from "../config/useFirestore";
import { auth } from "../config/firebase";
import { useUserContext } from "../context/UserContext";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Badge, Modal, Offcanvas } from "react-bootstrap";
import sendCapacitacionEmail from "../config/sendCapacitacionEmail";

const CapacitacionCuerpo = (capacitacion) => {
  const {
    data,
    data2,
    getCapacitacionHorario,
    addRegistroCapacitacion,
    getRegistroCapacitaciones,
  } = useFirestore();

  function random() {
    return Math.random().toString(36).substring(3, 15);
  }

  const [show, setShow] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const [show2, setShow2] = useState(false);

  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const { user } = useUserContext();
  let fecha;
  let horario;
  let duracion;

  useEffect(() => {
    getCapacitacionHorario(capacitacion.nombre);
    getRegistroCapacitaciones(capacitacion.nombre);
  }, []);

  const registroCapacitacion = () => {
    if (data2.length === 0) {
      addRegistroCapacitacion(
        auth.currentUser.uid,
        capacitacion.nombre,
        auth.currentUser.email
      );
      {
        data.map((item) => {
          fecha = item.dia;
          horario = item.horaCapacitacion;
          duracion = item.duracion;
        });
      }
      sendCapacitacionEmail(
        auth.currentUser.email,
        capacitacion.nombre,
        auth.currentUser.displayName,
        fecha,
        horario,
        duracion
      );
      setDisabled(true);
      handleShow2();
    } else {
      handleShow();
    }
  };

  return (
    <div className="contenidoCapacitacion">
      <div className="imagenCapacitacion">
        <img src={capacitacion.imagen} alt="" />
      </div>
      <div className="informacionCap">
        <h1>HORARIOS</h1>

        <div className="todaInfo">
          {data.map((item) => (
            <div className="datosCap" key={random()}>
              <p>{item.dia}</p>

              <p>
                {item.horaCapacitacion} <br /> {item.duracion}
              </p>
              <p>{item.instructor}</p>
            </div>
          ))}
        </div>

        {user ? (
          <button onClick={registroCapacitacion} disabled={disabled}>
            INSCRIBIRSE
          </button>
        ) : (
          <Link to={"/login"}>INSCRIBIRSE</Link>
        )}
      </div>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Lo sentimos...</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Ya te has registrado a esta capacitación
        </Offcanvas.Body>
      </Offcanvas>

      <Offcanvas show={show2} onHide={handleClose2}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Registro Completado!!!!</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>Tu registro ha sido ha sido completado</Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default CapacitacionCuerpo;
