import { Link } from "react-router-dom";
import "./style.css"
import bb from './bb.png'

function Navbar () {
    return(
        <div>
        <nav>
            <Link to="/">
                <img src={bb}/>
            </Link>
            <Link to="/pra-voce">Pra você</Link>
            <Link to="/pro-seu-negocio">Pro Seu Negócio</Link>
            <Link to="/agronegocios">Agronegócios</Link>
            <Link to="/setor-publico">Setor Público</Link>
            <label>
                <input placeholder="O que você precisa?" id="help"></input>
            </label>
            <Link to="/conta">ACESSE SUA CONTA</Link>
        </nav>
        </div> 
    );
}

export default Navbar;