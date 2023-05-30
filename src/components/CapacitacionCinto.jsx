import "../assets/css/capacitacionesStyle.css";

const CapacitacionCinto = (capacitacion) => {
  return (
    <div className="textoCinto">
      <h2>{capacitacion.nombre}</h2>
    </div>
  );
};

export default CapacitacionCinto;
