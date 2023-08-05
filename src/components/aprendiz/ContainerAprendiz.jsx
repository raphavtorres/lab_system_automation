import Botao from "../Botao";

export default function ContainerAprendiz(props) {
    return (
        <div className="container m-5">
            <h1>{props.titulo}</h1>

            {props.components &&
                <div className="flex justify-around flex-wrap">
                    {props.components.map((component) => (
                        <div className="inpDiv">
                        <p className="inpParg flex justify-start">{component.title}</p>
                        {component.comp}
                        </div>
                    ))}
                </div>
            }

            {props.fields.map((inp) => (
                <div className="inpDiv">
                <p className="inpParg">{inp.title}</p>
                <textarea className="inputText texareaAprendiz" placeholder={inp.placeholder} maxlength="400" rows="5" cols="33"></textarea>
                </div>
            ))}

            <div>{props.nomeBotao && <Botao name={props.nomeBotao} />}</div>
        </div>
    );
};