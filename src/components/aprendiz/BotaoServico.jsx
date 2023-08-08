import { Link } from "react-router-dom";

export default function BotaoServico(props) {
    return (
        <Link to={props.href}>
            <button className="servico-btn">
                <img src={props.src} alt="" />
                <div>{props.name}</div>
            </button>
        </Link>
    );
};
