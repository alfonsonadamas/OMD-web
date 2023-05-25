import "../assets/css/capacitacion.css"
const Capacitacion = (capacitacion) =>{
    return(
        <>
        {/* <div className="capacitacion" data-aos="fade-right"> */}
        <div className="capacitacion">
            <div className="subcapa">
                <h1>{capacitacion.titulo}</h1>
                <p>{capacitacion.descripcion}</p>
                <p className="disponibilidad">Espacios Disponibles:<span> {capacitacion.disponibles}</span></p>
                <button className="capa-button">Inscribirme</button>
            </div>
            <div className="capa-imagen">
                <img src={capacitacion.dirimg} alt="capacitacion" />
            </div>
        </div>
        </>
    )
}

export default Capacitacion