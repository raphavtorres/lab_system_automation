import { Link, Outlet } from "react-router-dom";
import Logo from "../assets/logo.png";
import LineNav from "../assets/line-navbar.png";
import Dropdown from "./Dropdown";

export default function Navbar() {
    const options = [
        { value: 'home', label: <Link to="/">Home</Link> },
        { value: 'login', label: <Link to="/login">Login</Link> },
        { value: 'cadastro', label: <Link to="/cadastro">Cadastro</Link> },
        { value: 'adm', label: <Link to="/adm">ADM</Link> },
        { value: 'aprendiz', label: <Link to="/aprendiz">Aprendiz</Link> },
    ];

    return (
        <>
            <div className="divLineImg"><img className="boschLine" src={LineNav} alt="" /></div>

            <nav>
                <img className="logo" src={Logo} alt="" />
                <div className="navLinks">
                    <Dropdown options={options} />
                </div>
                <button className="btnSair"></button>
            </nav>
            <main className="conteudoOutlet"><Outlet /></main>
        </>
    );
};