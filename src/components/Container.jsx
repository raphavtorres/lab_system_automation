import Botao from "./Botao";

export default function Container(props) {
    return (
        <div className="container">
            <h1>{props.titulo}</h1>

            {props.component &&
                <div className="flex justify-around flex-wrap">
                    {props.components.map((component) => (
                        <div className="inpDiv">
                        <p className="inpParg flex justify-start">{component.title}</p>
                        {component.comp}
                        </div>
                    ))}
                </div>
            }

            <div>
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