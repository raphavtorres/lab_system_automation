import { Link } from "react-router-dom";

export default function BotaoServico(props) {
    return (
        <Link to={props.href}>
            <button className="botaoServico">
                <img className="" src={props.src} alt="" />
                <div>{props.name}</div>
            </button>
        </Link>
    );
};
