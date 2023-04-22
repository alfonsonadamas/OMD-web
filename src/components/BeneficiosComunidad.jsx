import { Link } from "react-router-dom";

const BeneficiosComunidad = ({pregunta, clase}) =>{
    return (
        <div>
            <h2 className="empresa">Beneficios</h2>
            <div className="beneficios">
                <ul>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante turpis, egestas nec venenatis sed, facilisis sit amet est. Integer maximus tempor risus, ac pharetra quam mattis a. Vestibulum sed nunc ante.</li>
                    <li>Fusce euismod tincidunt convallis. Nunc sollicitudin imperdiet ante sit amet porta.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante turpis, egestas nec venenatis sed, facilisis sit amet est. Integer maximus tempor risus, ac pharetra quam mattis a. Vestibulum sed nunc ante.</li>
                    <li>Fusce euismod tincidunt convallis. Nunc sollicitudin imperdiet ante sit amet porta.</li>
                </ul>
            </div>
            <h2 className="empresa">{pregunta}</h2>
            <div className="beneficios">
                <ul>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante turpis, egestas nec venenatis sed, facilisis sit amet est. Integer maximus tempor risus, ac pharetra quam mattis a. Vestibulum sed nunc ante.</li>
                    <li>Fusce euismod tincidunt convallis. Nunc sollicitudin imperdiet ante sit amet porta.</li>
                </ul>
            </div>
            <div className="boton_registro ">
                <Link className={clase}>PRE-REGISTRO</Link>
            </div>
            
        </div>
    )
}

export default BeneficiosComunidad;