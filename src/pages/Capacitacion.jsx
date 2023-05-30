import { useParams } from "react-router-dom";
import logoOMD from "../assets/img/OMD_logo.png";
import perfil from "../assets/img/perfil.jpg";
import CapacitacionCinto from "../components/CapacitacionCinto";
import CapacitacionCuerpo from "../components/CapacitacionCuerpo";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { useFirestore } from "../config/useFirestore";
import Spinner from "../components/Spinner";

const Capacitacion = () => {
  const { data, getCapacitacion, loading } = useFirestore();
  let { id_capacitacion } = useParams();

  console.log(id_capacitacion);

  useEffect(() => {
    getCapacitacion(id_capacitacion);
  }, []);

  if (loading) return <Spinner></Spinner>;

  return (
    <div>
      {data.map((item) => (
        <div key={id_capacitacion}>
          <Navbar img={logoOMD} perfil={perfil}></Navbar>
          <CapacitacionCinto nombre={item.nombre} />
          <CapacitacionCuerpo imagen={item.imagen} nombre={item.nombre} />
          <Footer />
        </div>
      ))}
    </div>
  );
};

export default Capacitacion;
