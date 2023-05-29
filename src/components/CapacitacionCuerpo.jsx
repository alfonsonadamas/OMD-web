import '../assets/css/capacitacionesStyle.css'


const CapacitacionCuerpo = () => {
    return(
        <div className='contenidoCapacitacion'>
            <div className='imagenCapacitacion'>
                <img src="../src/assets/img/Capacitacion1.jpg" alt="" />
            </div>

                    

                <div className='informacionCap'>
                <h1>SESIONES DISPONIBLES</h1>
                

                    <div className='todaInfo'>


                        <div className='datosCap'>
                            
                            <p>Lunes 30</p>
                            <p>7:00 pm <br /> 2 hrs</p>
                            <p>Instructor</p>
                            
                        </div>

                        <div className='datosCap'>
                            
                            <p>Lunes 30</p>
                            <p>7:00 pm <br /> 2 hrs</p>
                            <p>Instructor</p>
                            
                        </div>
                        <div className='datosCap'>
                            
                            <p>Lunes 30</p>
                            <p>7:00 pm <br /> 2 hrs</p>
                            <p>Instructor</p>
                            
                        </div>
                        
                    </div>

                    <button>INSCRIBIRSE</button>

                </div>
        </div>
);
}

export default CapacitacionCuerpo;