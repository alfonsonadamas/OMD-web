import '../assets/css/fortalecimientos.css'
import { useState } from "react";

const Fortalecimientos = () => {
    const [classlist, setClasslist] = useState(1);
    const [classlist2, setClasslist2] = useState(0);
    const [classlist3, setClasslist3] = useState(0);
    const [classlist4, setClasslist4] = useState(0);
    const [classlist5, setClasslist5] = useState(0);

    const handdleToggle = () =>{
        setClasslist(1)
        setClasslist2(0)
        setClasslist3(0)
        setClasslist4(0)
        setClasslist5(0)
    }
    const handdleToggle2 = () =>{
        setClasslist(0)
        setClasslist2(1)
        setClasslist3(0)
        setClasslist4(0)
        setClasslist5(0)
    }
    const handdleToggle3 = () =>{
        setClasslist(0)
        setClasslist2(0)
        setClasslist3(1)
        setClasslist4(0)
        setClasslist5(0)
    }
    const handdleToggle4 = () =>{
        setClasslist(0)
        setClasslist2(0)
        setClasslist3(0)
        setClasslist4(1)
        setClasslist5(0)
    }
    const handdleToggle5 = () =>{
        setClasslist(0)
        setClasslist2(0)
        setClasslist3(0)
        setClasslist4(0)
        setClasslist5(1)
    }
    return(
        <div  data-aos="fade-up">
            <div className="fortalecimiento">
                <div className={classlist===0?"img_degradadon":"img_degradadov"}>
                    <div className="degradado">
                        <div className="nombre">
                            <p>Conductas Financieras Saludables</p>
                        </div>
                        <img src="../src/assets/img/body.jpg" alt="" />
                    </div>
                </div>
                <div className={classlist2===0?"img_degradadon":"img_degradadov"}>
                    <div className="degradado">
                        <div className="nombre">
                            <p>Conductas Financieras Saludables</p>
                        </div>
                        <img src="../src/assets/img/Carrera5k.jpg" alt="" />
                    </div>
                </div>
                <div className={classlist3===0?"img_degradadon":"img_degradadov"}>
                    <div className="degradado">
                        <div className="nombre">
                            <p>Conductas Financieras Saludables</p>
                        </div>
                        <img src="../src/assets/img/comunidad.jpg" alt="" />
                    </div>
                </div>
                <div className={classlist4===0?"img_degradadon":"img_degradadov"}>
                    <div className="degradado">
                        <div className="nombre">
                            <p>Conductas Financieras Saludables</p>
                        </div>
                        <img src="../src/assets/img/slide_1.jpg" alt="" />
                    </div>
                </div>
                <div className={classlist5===0?"img_degradadon":"img_degradadov"}>
                    <div className="degradado">
                        <div className="nombre">
                            <p>Conductas Financieras Saludables</p>
                        </div>
                        <img src="../src/assets/img/slide_2.jpg" alt="" />
                    </div>
                </div>

                <div className='fortalecimientos'>
                    <h2>Fortalece tu presente <br /> para potenciar tu mañana</h2>
                    <div onClick={handdleToggle} className='caja'>
                        <p>Fortalecimiento Economico</p>
                    </div>
                    <div onClick={handdleToggle2} className='caja'>
                        <p>Fortalecimiento Economico</p>
                    </div>
                    <div onClick={handdleToggle3} className='caja'>
                        <p>Fortalecimiento Economico</p>
                    </div>
                    <div onClick={handdleToggle4} className='caja'>
                        <p>Fortalecimiento Economico</p>
                    </div>
                    <div onClick={handdleToggle5} className='caja'>
                        <p>Fortalecimiento Economico</p>
                    </div>
                </div>

            </div>
            <div className="fortalecimientoresponsivo">
                <h2>Fortalece tu presente <br /> para potenciar tu mañana</h2>
                        <div onClick={handdleToggle} className='caja'>
                            <p>Fortalecimiento Economico</p>
                        </div>
                        <div className={classlist===0?"img_degradadon":"img_degradadov"}>
                            <div className="degradadoresponsivo">
                                <div className="nombrer">
                                    <p>Conductas Financieras Saludables</p>
                                </div>
                                <img src="../src/assets/img/body.jpg" alt="" />
                            </div>
                        </div>
                        <div onClick={handdleToggle2} className='caja'>
                            <p>Fortalecimiento Economico</p>
                        </div>
                        <div className={classlist2===0?"img_degradadon":"img_degradadov"}>
                            <div className="degradadoresponsivo">
                                <div className="nombrer">
                                    <p>Conductas Financieras Saludables</p>
                                </div>
                                <img src="../src/assets/img/Carrera5k.jpg" alt="" />
                            </div>
                        </div>
                        <div onClick={handdleToggle3} className='caja'>
                            <p>Fortalecimiento Economico</p>
                        </div>
                        <div className={classlist3===0?"img_degradadon":"img_degradadov"}>
                            <div className="degradadoresponsivo">
                                <div className="nombrer">
                                    <p>Conductas Financieras Saludables</p>
                                </div>
                                <img src="../src/assets/img/comunidad.jpg" alt="" />
                            </div>
                        </div>
                        <div onClick={handdleToggle4} className='caja'>
                            <p>Fortalecimiento Economico</p>
                        </div>
                        <div className={classlist4===0?"img_degradadon":"img_degradadov"}>
                            <div className="degradadoresponsivo">
                                <div className="nombrer">
                                    <p>Conductas Financieras Saludables</p>
                                </div>
                                <img src="../src/assets/img/slide_1.jpg" alt="" />
                            </div>
                        </div>
                        <div onClick={handdleToggle5} className='caja'>
                            <p>Fortalecimiento Economico</p>
                        </div>
                        <div className={classlist5===0?"img_degradadon":"img_degradadov"}>
                            <div className="degradadoresponsivo">
                                <div className="nombrer">
                                    <p>Conductas Financieras Saludables</p>
                                </div>
                                <img src="../src/assets/img/slide_2.jpg" alt="" />
                            </div>
                        </div>
            </div>
            <div className='cinta'>
                <h3>¿QUIERES ACCEDER A MAS CAPACITACIONES?</h3>
                <p>Contamos con otras capacitaciones presenciales y virtuales para afiliados</p>
                <div className='botoncinta'>
                    <button className='btoncinta'>AFILIATE</button>
                </div>
            </div>
        </div>
        
        
    )
}

export default Fortalecimientos;