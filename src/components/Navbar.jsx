import { Link, Outlet } from "react-router-dom";
import Logo from "../assets/logo.png";
import LineNav from "../assets/line-navbar.png";
import Dropdown from "./Dropdown";

export default function Navbar() {
    const options = [
        { value: 'home', label: <Link to="/">Home</Link> },
        { value: 'login', label: <Link to="/login">Login</Link> },
        { value: 'cadastro', label: <Link to="/cadastro">Cadastro</Link> },

        { value: 'adm', label: <Link to="/adm">Adm Relatorio</Link> },
        { value: 'problemas', label: <Link to="/adm/problemas">Adm Problemas</Link> },

        { value: 'aprendiz', label: <Link to="/aprendiz">Aprendiz</Link> },
    ];

    return (
        <>
            <div><img className="colored-line" src={LineNav} alt="" /></div>

            <nav>
                <img className="logo" src={Logo} alt="" />
                <div className="nav-links-dropdown">
                    <Dropdown options={options} />
                </div>
                <button className="exit-btn"></button>
            </nav>
            <main className="content-outlet"><Outlet /></main>
        </>
    );
};