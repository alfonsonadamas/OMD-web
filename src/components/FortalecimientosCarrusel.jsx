import { useEffect } from "react";
import "../assets/css/fortalecimientos.css";
import { useFirestore } from "../config/useFirestore";
import Spinner from "./Spinner";

const FortalecimientosCarrusel = () => {
  const { data, getvermasCarrusel, loading } = useFirestore();
  useEffect(() => {
    getvermasCarrusel();
  }, []);

  if (loading) return <Spinner></Spinner>;

  return (
    <div>
      {data.map((item) => (
        <div className="fortalecimiento_carrusel">
          <div className="fortalecimiento_r">
            <div className="fortalecimiento_imagen">
              <img src={item.imagen1} alt="" />
            </div>
            <div className="fortalecimiento_tittle">
              <h3>
                Fortalecimiento <span>{item.fortalecimiento1}</span>
              </h3>
              <p>{item.texto1}</p>
            </div>
          </div>

          <div className="fortalecimiento_r fortalecimiento_i">
            <div className="fortalecimiento_tittle">
              <h3>
                Fortalecimiento <span>{item.fortalecimiento2}</span>
              </h3>
              <p>{item.texto2}</p>
            </div>
            <div className="fortalecimiento_imagen">
              <img src={item.imagen2} alt="" />
            </div>
          </div>

          <div className="fortalecimiento_r">
            <div className="fortalecimiento_imagen">
              <img src={item.imagen3} alt="" />
            </div>
            <div className="fortalecimiento_tittle">
              <h3>
                Fortalecimiento <span>{item.fortalecimiento3}</span>
              </h3>
              <p>{item.texto3}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FortalecimientosCarrusel;
