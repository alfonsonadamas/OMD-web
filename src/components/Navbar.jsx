import "../assets/css/nav.css";
import { useUserContext } from "../context/UserContext";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

const Navbar = ({ img, perfil }) => {
  const [classlist, setClasslist] = useState("false");
  const handdleToggle = () => {
    setClasslist(!classlist);
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="nav_">
      <Link className="nav_img" to="/">
        <img src={img} alt="OMD" />
      </Link>
      <div className="links">
        <ul className="links_navv">
          <li className="link_nav">
            <NavLink className="link_" to="/nosotros">
              Nosotros
            </NavLink>
          </li>
          <li className="link_nav">
            <NavLink className="link_" to="/eventos">
              Eventos
            </NavLink>
          </li>
          <li className="link_nav">
            <NavLink className="link_" to="/comunidad">
              Comunidad
            </NavLink>
          </li>
          <li className="link_nav">
            <NavLink className="link_" to="/galeria">
              Galeria
            </NavLink>
          </li>
          <li className="link_nav">
            <NavLink className="link_" to="/perfil">
              <img className="link_img" src={perfil} alt="perfil" />
            </NavLink>
          </li>
        </ul>
      </div>
      {/* hamburguesa */}
      <div className="Burguer">
        <Button variant="primary" onClick={handleShow} className="me-2">
          <img
            className="imgLogoT"
            src="\src\assets\img\ICONO_HAMBURGUESA.png"
            alt=""
          />
        </Button>
        <Offcanvas
          className="MenuH"
          show={show}
          onHide={handleClose}
          placement="end"
        >
          <Offcanvas.Header className="" closeButton>
            <Offcanvas.Title>
              <img
                className="imgLogoO"
                src="\src\assets\img\OMD_logo.png"
                alt=""
              />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="">
            <ul className="links_nav">
              <li className="link_nav">
                <NavLink className="link_" to="/nosotros">
                  Nosotros
                </NavLink>
              </li>
              <li className="link_nav">
                <NavLink className="link_" to="/eventos">
                  Eventos
                </NavLink>
              </li>
              <li className="link_nav">
                <NavLink className="link_" to="/comunidad">
                  Comunidad
                </NavLink>
              </li>
              <li className="link_nav">
                <NavLink className="link_" to="/galeria">
                  Galeria
                </NavLink>
              </li>
              <li className="link_nav">
                <NavLink className="link_" to="/perfil">
                  <img className="link_img" src={perfil} alt="perfil" />
                </NavLink>
              </li>
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </div>
  );
};

export default Navbar;
