import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import "../assets/css/carousel_afi.css";
import { useFirestore } from "../config/useFirestore";
import { useEffect } from "react";

function CarruselAfiliados() {
  const { data, getCarruselAfi } = useFirestore();

  useEffect(() => {
    getCarruselAfi();
  }, []);
  return (
    <div className="afi_carrusel">
      <h2 className="afi_tittle">Nuestros Afiliados</h2>

      <Carousel variant="dark">
        {data.map((item) => (
          <Carousel.Item className="afiliado">
            <div className="afi_perfil">
              <img src={item.imagen} alt="First slide" />
              <div className="afi_info">
                <h3>{item.titulo}</h3>
                <p>{item.texto}</p>
                <Link className="button_afi" to={"/login"}>
                  Afiliate
                </Link>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default CarruselAfiliados;
