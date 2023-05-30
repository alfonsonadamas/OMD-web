import logoOMD from "../assets/img/OMD_logo.png";
import perfil from "../assets/img/perfil.jpg";
// ----------------------------------------
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import QuienesSomos from "../components/Nosotros";
import Representantes from "../components/Representantes";
import Video from "../components/VideoNos";
import MisVis from "../components/MisVis";
import { useFirestore } from "../config/useFirestore";
import { useEffect } from "react";
import Spinner from "../components/Spinner";

const Nosotros = () => {
  const { data2, getNosotros, loading, error } = useFirestore();

  useEffect(() => {
    getNosotros();
  }, []);

  if (loading) return <Spinner></Spinner>;

  return (
    <div>
      {data2.map((item) => (
        <div>
          <Navbar img={logoOMD} perfil={perfil}></Navbar>
          <QuienesSomos
            texto={item.textoNosotros}
            imagen={item.imagenNosotros}
          />
          <Representantes
            per={"one"}
            sex={"Ella"}
            nombre={"Fabiola"}
            quienes={item.textoFabiola}
            fotor={item.imagenFabiola}
          ></Representantes>
          <Representantes
            per={"two"}
            sex={"El"}
            nombre={"Arturo"}
            quienes={item.textoArturo}
            fotor={item.imagenArturo}
          ></Representantes>
          <Video video={item.linkVideo}></Video>
          <MisVis mision={item.mision} vision={item.vision} />
          <Footer></Footer>
        </div>
      ))}
    </div>
  );
};

export default Nosotros;
