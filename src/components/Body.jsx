import { Link } from "react-router-dom";
import "../assets/css/body.css";
import { useFirestore } from "../config/useFirestore";
import { useEffect } from "react";

const Body = () => {
  const { data2, getInicio1 } = useFirestore();

  useEffect(() => {
    getInicio1();
  }, []);

  return (
    <div>
      {data2.map((item) => (
        <div className="body">
          <div className="body_info" data-aos="fade-up">
            <h2>Por un Mexico en donde todos prosperen</h2>
            <p>{item.texto}</p>
            <Link to={"/login"} className="btn_body">
              Afiliate Ahora
            </Link>
          </div>
          <div className="body_img" data-aos="fade-up">
            <img src={item.imagen} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Body;
