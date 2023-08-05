import Botao from "./Botao";

export default function Modal(props) {
    return (
        <div className="container">
            <h1>{props.titulo}</h1>
            <div className={props.grid && "grid"}>
                {props.fields.map((inp) => (
                    <div className="inpDiv">
                    <p className="inpParg">{inp.title}</p>
                    <input id={inp.id} placeholder={inp.placeholder} className="inputText" type={inp.type} />
                    </div>
                ))}
            </div>
            <div>{props.semConta && <p>Não tem uma conta? <a>Cadastre-se</a></p>}</div>
            <div>{props.nomeBotao && <Botao name={props.nomeBotao} />}</div>
        </div>
    );
};