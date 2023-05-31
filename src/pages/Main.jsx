import logoOMD from "../assets/img/OMD_logo.png";
import perfil from "../assets/img/perfil.png";
import "../assets/css/carousel.css";
// ----------------------------------------
import Navbar from "../components/Navbar";
import Slider from "../components/Carrusel";
import Body from "../components/Body";
import Fortalecimientos from "../components/Fortalecimientos";
import Calendar from "../components/Calendar";
import Footer from "../components/Footer";
import Formulario from "../components/Form";
import CarruselAfiliados from "../components/CarruselAfiliados";
import { useFirestore } from "../config/useFirestore";
import { useEffect } from "react";
import Spinner from "../components/Spinner";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

const Main = () => {
  const { data, getCarrusel, loading } = useFirestore();

  useEffect(() => {
    getCarrusel();
  }, []);

  if (loading) return <Spinner></Spinner>;

  return (
    <div>
      <Navbar img={logoOMD} perfil={perfil}></Navbar>
      <Carousel className="slider">
        {data.map((item) => (
          <Carousel.Item className="slider_item">
            <div className="gradient"></div>

            <div>
              <img
                className="d-block w-100"
                src={item.imagen}
                alt="Third slide"
              />

              <Carousel.Caption className="slider_caption">
                <div className="slider_label">
                  <h3 className="tittle">FORTALECIMIENTO</h3>
                  <h3 className="tittle">{item.nombre}</h3>
                  <p className="description">{item.texto}</p>
                  <Link to="/fortalecimientos" className="butn">
                    Mas Informacion
                  </Link>
                </div>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <Body></Body>
      <Fortalecimientos></Fortalecimientos>
      <Calendar></Calendar>
      <CarruselAfiliados></CarruselAfiliados>
      <Formulario></Formulario>
      <Footer></Footer>
    </div>
  );
};

export default Main;
