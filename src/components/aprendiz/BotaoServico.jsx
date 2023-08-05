import { Link } from "react-router-dom";
import { Link } from "react-routr-do";

export default function BotaoServico(props) {
    return (
        <Link to={props.href}>
            <button className="botaoServico">
                <img className=" bg-red-500" src={props.src} alt="" />
                <div>{props.name}</div>
            </button>
        </Link>
    );
};
