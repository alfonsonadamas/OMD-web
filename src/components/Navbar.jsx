import "../assets/css/nav.css"
import { Link, NavLink } from "react-router-dom";

const Navbar = ({img, perfil}) =>{
    return(
        
        <div className="nav_">
            <Link className="nav_img" to='/'><img src={img} alt="OMD"/></Link>


            <div className="links">
                <ul className="links_nav">
                    <li className="link_nav"><NavLink className="link_" to="/nosotros">Nosotros</NavLink></li>
                    <li className="link_nav"><NavLink className="link_" to="/eventos">Eventos</NavLink></li>
                    <li className="link_nav"><NavLink className="link_" to="/comunidad">Comunidad</NavLink></li>
                    <li className="link_nav"><NavLink className="link_" to="/galeria">Galeria</NavLink></li>
                    <li className="link_nav"><NavLink className="link_" to="/perfil"><img className="link_img" src={perfil} alt="perfil" /></NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;