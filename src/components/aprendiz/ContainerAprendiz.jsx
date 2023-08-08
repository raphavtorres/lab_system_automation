import Botao from "../Botao";

export default function ContainerAprendiz(props) {
    return (
        <div className="container">
            <h1>{props.titulo}</h1>

            {props.components &&
                <div className="components-inputs">
                    {props.components.map((component) => (
                        <div className="input-div">
                        <p className="inp-parag">{component.title}</p>
                        {component.comp}
                        </div>
                    ))}
                </div>
            }

            {props.fields.map((inp) => (
                <div className="input-div">
                <p className="inp-parag">{inp.title}</p>
                <textarea className="text-inp texareaAprendiz" placeholder={inp.placeholder} maxlength="400" rows="5" cols="33"></textarea>
                </div>
            ))}

            <div>{props.nomeBotao && <Botao name={props.nomeBotao} />}</div>
        </div>
    );
};