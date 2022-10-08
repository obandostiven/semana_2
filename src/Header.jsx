import {Link} from "react-router-dom"
const Header = ()=> {

    return <div> 
        <Link to="inicio">Inicio</Link>
        <Link to="acerca de">Acercade</Link>
        <Link to="info">Info</Link>
        <Link to="juegos">Juegos</Link>
        <Link to="camara">Camara</Link>
        <Link to="localizacion">Localizacion</Link>
    </div>

}


export default Header 