import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import "../assets/css/carousel.css";
import { useFirestore } from "../config/useFirestore";
import { useEffect } from "react";

function Slider() {
  const { data, getCarrusel } = useFirestore();

  useEffect(() => {
    getCarrusel();
  }, []);
  return (
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
                <h3 className="tittle">{item.fortalecimiento}</h3>
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
  );
}

export default Slider;
