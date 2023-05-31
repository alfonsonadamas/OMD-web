import { Link } from "react-router-dom";
import "../assets/css/fortalecimientos.css";
import { useEffect, useState } from "react";
import { useFirestore } from "../config/useFirestore";
import Spinner from "./Spinner";

const Fortalecimientos = () => {
  const [classlist, setClasslist] = useState(1);
  const [classlist2, setClasslist2] = useState(0);
  const [classlist3, setClasslist3] = useState(0);
  const [classlist4, setClasslist4] = useState(0);
  const [classlist5, setClasslist5] = useState(0);

  const { data, getInicio2, loading } = useFirestore();
  useEffect(() => {
    getInicio2();
  }, []);

  if (loading) return <Spinner></Spinner>;

  const handdleToggle = () => {
    setClasslist(1);
    setClasslist2(0);
    setClasslist3(0);
    setClasslist4(0);
    setClasslist5(0);
  };
  const handdleToggle2 = () => {
    setClasslist(0);
    setClasslist2(1);
    setClasslist3(0);
    setClasslist4(0);
    setClasslist5(0);
  };
  const handdleToggle3 = () => {
    setClasslist(0);
    setClasslist2(0);
    setClasslist3(1);
    setClasslist4(0);
    setClasslist5(0);
  };
  const handdleToggle4 = () => {
    setClasslist(0);
    setClasslist2(0);
    setClasslist3(0);
    setClasslist4(1);
    setClasslist5(0);
  };
  const handdleToggle5 = () => {
    setClasslist(0);
    setClasslist2(0);
    setClasslist3(0);
    setClasslist4(0);
    setClasslist5(1);
  };
  return (
    <div>
      {data.map((item) => (
        <div data-aos="fade-up">
          <div className="fortalecimiento">
            <div
              className={classlist === 0 ? "img_degradadon" : "img_degradadov"}
            >
              <div className="degradado">
                <div className="nombre">
                  <p>{item.titulo1}</p>
                </div>
                <img src={item.imagen1} alt="" />
              </div>
            </div>
            <div
              className={classlist2 === 0 ? "img_degradadon" : "img_degradadov"}
            >
              <div className="degradado">
                <div className="nombre">
                  <p>{item.titulo2}</p>
                </div>
                <img src={item.imagen2} alt="" />
              </div>
            </div>
            <div
              className={classlist3 === 0 ? "img_degradadon" : "img_degradadov"}
            >
              <div className="degradado">
                <div className="nombre">
                  <p>{item.titulo3}</p>
                </div>
                <img src={item.imagen3} alt="" />
              </div>
            </div>
            <div
              className={classlist4 === 0 ? "img_degradadon" : "img_degradadov"}
            >
              <div className="degradado">
                <div className="nombre">
                  <p>{item.titulo4}</p>
                </div>
                <img src={item.imagen4} alt="" />
              </div>
            </div>

            <div className="fortalecimientos">
              <h2>
                Fortalece tu presente <br /> para potenciar tu mañana
              </h2>
              <div onClick={handdleToggle} className="caja">
                <p>Fortalecimiento {item.fortalecimiento}</p>
              </div>
              <div onClick={handdleToggle2} className="caja">
                <p>Fortalecimiento {item.fortalecimiento2}</p>
              </div>
              <div onClick={handdleToggle3} className="caja">
                <p>Fortalecimiento {item.fortalecimiento3}</p>
              </div>
              <div onClick={handdleToggle4} className="caja">
                <p>Fortalecimiento {item.fortalecimiento4}</p>
              </div>
            </div>
          </div>
          <div className="fortalecimientoresponsivo">
            <h2>
              Fortalece tu presente <br /> para potenciar tu mañana
            </h2>
            <div onClick={handdleToggle} className="caja">
              <p>Fortalecimiento {item.fortalecimiento}</p>
            </div>
            <div
              className={classlist === 0 ? "img_degradadon" : "img_degradadov"}
            >
              <div className="degradadoresponsivo">
                <div className="nombrer">
                  <p>{item.titulo1}</p>
                </div>
                <img src={item.imagen1} alt="" />
              </div>
            </div>
            <div onClick={handdleToggle2} className="caja">
              <p>Fortalecimiento {item.fortalecimiento2}</p>
            </div>
            <div
              className={classlist2 === 0 ? "img_degradadon" : "img_degradadov"}
            >
              <div className="degradadoresponsivo">
                <div className="nombrer">
                  <p>{item.titulo2}</p>
                </div>
                <img src={item.imagen2} alt="" />
              </div>
            </div>
            <div onClick={handdleToggle3} className="caja">
              <p>Fortalecimiento {item.fortalecimiento3}</p>
            </div>
            <div
              className={classlist3 === 0 ? "img_degradadon" : "img_degradadov"}
            >
              <div className="degradadoresponsivo">
                <div className="nombrer">
                  <p>{item.titulo3}</p>
                </div>
                <img src={item.imagen3} alt="" />
              </div>
            </div>
            <div onClick={handdleToggle4} className="caja">
              <p>Fortalecimiento {item.fortalecimiento4}</p>
            </div>
            <div
              className={classlist4 === 0 ? "img_degradadon" : "img_degradadov"}
            >
              <div className="degradadoresponsivo">
                <div className="nombrer">
                  <p>{item.titulo4}</p>
                </div>
                <img src={item.imagen4} alt="" />
              </div>
            </div>
          </div>
          <div className="cinta">
            <h3>¿QUIERES ACCEDER A MAS CAPACITACIONES?</h3>
            <p>
              Contamos con otras capacitaciones presenciales y virtuales para
              afiliados
            </p>
            <div className="botoncinta">
              <Link className="btoncinta" to={"/login"}>
                AFILIATE
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Fortalecimientos;
