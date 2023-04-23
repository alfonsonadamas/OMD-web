import { Link } from "react-router-dom";
import OMDLogo from '../assets/img/OMD_blanco.png'
import '../assets/css/Galeria.css'
import { useState } from "react";


const Galeria = () => {
    const [classlist, setClasslist] = useState('false');
    const [classlist2, setClasslist2] = useState('false');
    const [classlist3, setClasslist3] = useState('false');
    const [classlist4, setClasslist4] = useState('false');
    const [classlist5, setClasslist5] = useState('false');
    const [classlist6, setClasslist6] = useState('false');
    const [classlist7, setClasslist7] = useState('false');
    const [classlist8, setClasslist8] = useState('false');
    const handdleToggle = () =>{
        setClasslist(!classlist)
        setClasslist2("false")
        setClasslist3("false")
        setClasslist4("false")
        setClasslist5("false")
        setClasslist6("false")
        setClasslist7("false")
        setClasslist8("false")
    }
    const handdleToggle2 = () =>{
        setClasslist("false")
        setClasslist2(!classlist2)
        setClasslist3("false")
        setClasslist4("false")
        setClasslist5("false")
        setClasslist6("false")
        setClasslist7("false")
        setClasslist8("false")
    }
    const handdleToggle3 = () =>{
        setClasslist("false")
        setClasslist2("false")
        setClasslist3(!classlist3)
        setClasslist4("false")
        setClasslist5("false")
        setClasslist6("false")
        setClasslist7("false")
        setClasslist8("false")
    }
    const handdleToggle4 = () =>{
        setClasslist("false")
        setClasslist2("false")
        setClasslist3("false")
        setClasslist4(!classlist4)
        setClasslist5("false")
        setClasslist6("false")
        setClasslist7("false")
        setClasslist8("false")
    }
    const handdleToggle5 = () =>{
        setClasslist("false")
        setClasslist2("false")
        setClasslist3("false")
        setClasslist4("false")
        setClasslist5(!classlist5)
        setClasslist6("false")
        setClasslist7("false")
        setClasslist8("false")
    }
    const handdleToggle6 = () =>{
        setClasslist("false")
        setClasslist2("false")
        setClasslist3("false")
        setClasslist4("false")
        setClasslist5("false")
        setClasslist6(!classlist6)
        setClasslist7("false")
        setClasslist8("false")
    }
    const handdleToggle7 = () =>{
        setClasslist("false")
        setClasslist2("false")
        setClasslist3("false")
        setClasslist4("false")
        setClasslist5("false")
        setClasslist6("false")
        setClasslist7(!classlist7)
        setClasslist8("false")
    }
    const handdleToggle8 = () =>{
        setClasslist("false")
        setClasslist2("false")
        setClasslist3("false")
        setClasslist4("false")
        setClasslist5("false")
        setClasslist6("false")
        setClasslist7("false")
        setClasslist8(!classlist8)
    }


    return(        
        <div data-aos="fade-right" className="Contenedor">
            <div className="Cont_Imag">
                <img onClick={handdleToggle} src="../src/assets/img/EquipoOMD.jpg" className="Imagen" alt="" />
            </div>
            <div className="Cont_Imag">
                <img onClick={handdleToggle2} src="../src/assets/img/body.jpg" className="Imagen" alt="" />
            </div>
            <div className="Cont_Imag">
                <img onClick={handdleToggle3} src="../src/assets/img/Arturo.jpg" className="Imagen" alt="" />
            </div>
            <div className="Cont_Imag">
                <img onClick={handdleToggle4} src="../src/assets/img/fortalecimiento_eco.jpg" className="Imagen" alt="" />
            </div>

            <div className={classlist?"Cont_Imag_Infof":"Con_Imag_Infov"}>
                <div className="tect">
                    <h2>Item 1</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita dolores molestias pariatur ipsa. Rerum nostrum temporibus dolores, at iusto alias consectetur aspernatur pariatur unde odit possimus consequuntur accusamus fugit excepturi.</p>
                    <div className="Likes">
                        <p>5</p>
                        <img src='\src\assets\img\Corazon.png' alt="" />
                    </div>
                </div>
                <img src="../src/assets/img/EquipoOMD.jpg" alt="" />
            </div>
            <div className={classlist2?"Cont_Imag_Infof":"Con_Imag_Infov"}>
                <div className="tect">
                    <h2>Item 2</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita dolores molestias pariatur ipsa. Rerum nostrum temporibus dolores, at iusto alias consectetur aspernatur pariatur unde odit possimus consequuntur accusamus fugit excepturi.</p>
                    <div className="Likes">
                        <p>5</p>
                        <img src='\src\assets\img\Corazon.png' alt="" />
                    </div>
                </div>
                <img src="../src/assets/img/body.jpg" alt="" />
            </div>
            <div className={classlist3?"Cont_Imag_Infof":"Con_Imag_Infov"}>
                <div className="tect">
                    <h2>Item 3</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita dolores molestias pariatur ipsa. Rerum nostrum temporibus dolores, at iusto alias consectetur aspernatur pariatur unde odit possimus consequuntur accusamus fugit excepturi.</p>
                    <div className="Likes">
                        <p>5</p>
                        <img src='\src\assets\img\Corazon.png' alt="" />
                    </div>
                </div>
                <img src="../src/assets/img/Arturo.jpg" alt="" />
            </div>
            <div className={classlist4?"Cont_Imag_Infof":"Con_Imag_Infov"}>
                <div className="tect">
                    <h2>Item 4</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita dolores molestias pariatur ipsa. Rerum nostrum temporibus dolores, at iusto alias consectetur aspernatur pariatur unde odit possimus consequuntur accusamus fugit excepturi.</p>
                    <div className="Likes">
                        <p>5</p>
                        <img src='\src\assets\img\Corazon.png' alt="" />
                    </div>
                </div>
                <img src="../src/assets/img/fortalecimiento_eco.jpg" alt="" />
            </div>

            <div className="Cont_Imag">
                <img onClick={handdleToggle5} src="../src/assets/img/fortalecimiento_emo.jpg" className="Imagen" alt="" />
            </div>
            <div className="Cont_Imag">
                <img onClick={handdleToggle6} src="../src/assets/img/login.jpg" className="Imagen" alt="" />
            </div>
            <div className="Cont_Imag">
                <img onClick={handdleToggle7} src="../src/assets/img/slide_1.jpg" className="Imagen" alt="" />
            </div>
            <div className="Cont_Imag">
                <img onClick={handdleToggle8} src="../src/assets/img/slide_3.jpg" className="Imagen" alt="" />
            </div>

            <div className={classlist5?"Cont_Imag_Infof":"Con_Imag_Infov"}>
                <div className="tect">
                    <h2>Item 5</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita dolores molestias pariatur ipsa. Rerum nostrum temporibus dolores, at iusto alias consectetur aspernatur pariatur unde odit possimus consequuntur accusamus fugit excepturi.</p>
                    <div className="Likes">
                        <p>5</p>
                        <img src='\src\assets\img\Corazon.png' alt="" />
                    </div>
                </div>
                <img src="../src/assets/img/fortalecimiento_emo.jpg" alt="" />
            </div>
            <div className={classlist6?"Cont_Imag_Infof":"Con_Imag_Infov"}>
                <div className="tect">
                    <h2>Item 6</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita dolores molestias pariatur ipsa. Rerum nostrum temporibus dolores, at iusto alias consectetur aspernatur pariatur unde odit possimus consequuntur accusamus fugit excepturi.</p>
                    <div className="Likes">
                        <p>5</p>
                        <img src='\src\assets\img\Corazon.png' alt="" />
                    </div>
                </div>
                <img src="../src/assets/img/login.jpg" alt="" />
            </div>
            <div className={classlist7?"Cont_Imag_Infof":"Con_Imag_Infov"}>
                <div className="tect">
                    <h2>Item 7</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita dolores molestias pariatur ipsa. Rerum nostrum temporibus dolores, at iusto alias consectetur aspernatur pariatur unde odit possimus consequuntur accusamus fugit excepturi.</p>
                    <div className="Likes">
                        <p>5</p>
                        <img src='\src\assets\img\Corazon.png' alt="" />
                    </div>
                </div>
                <img src="../src/assets/img/slide_1.jpg" alt="" />
            </div>
            <div className={classlist8?"Cont_Imag_Infof":"Con_Imag_Infov"}>
                <div className="tect">
                    <h2>Item 8</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita dolores molestias pariatur ipsa. Rerum nostrum temporibus dolores, at iusto alias consectetur aspernatur pariatur unde odit possimus consequuntur accusamus fugit excepturi.</p>
                    <div className="Likes">
                        <p>5</p>
                        <img src='\src\assets\img\Corazon.png' alt="" />
                    </div>
                </div>
                <img src="../src/assets/img/slide_3.jpg" alt="" />
            </div>

        </div>
    );
}



export default Galeria;