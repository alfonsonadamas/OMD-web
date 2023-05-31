import { useEffect } from "react";
import "../assets/css/galeriahexagonal.css";
import { useFirestore } from "../config/useFirestore";
const Galeria_hexagonal = () => {
  const { data, getGaleriaHex } = useFirestore();

  useEffect(() => {
    getGaleriaHex();
  }, []);
  return (
    <>
      <main className="gallery">
        {data.map((item) => (
          <div className="gallery_item">
            <img src={item.imagen} alt="1" />
          </div>
        ))}
      </main>
    </>
  );
};

export default Galeria_hexagonal;
