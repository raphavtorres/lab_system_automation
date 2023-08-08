import Botao from "./Botao";

export default function Container(props) {
    return (
        <div className="container">
            <h1>{props.titulo}</h1>

            {props.component &&
                <div className="components-inputs">
                    {props.components.map((component) => (
                        <div className="input-div">
                            <p className="inp-parag">{component.title}</p>
                        {component.comp}
                        </div>
                    ))}
                </div>
            }

            <div>
                {props.fields.map((inp) => (
                    <div className="input-div">
                        <p className="inp-parag">{inp.title}</p>
                        <input id={inp.id} placeholder={inp.placeholder} className="text-inp" type={inp.type} />
                    </div>
                ))}
            </div>
            <div>{props.semConta && <p>Não tem uma conta? <a>Cadastre-se</a></p>}</div>
            <div>{props.nomeBotao && <Botao name={props.nomeBotao} />}</div>
        </div>
    );
};