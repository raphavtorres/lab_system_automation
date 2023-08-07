import Botao from "../Botao";


import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


export default function ModalAdm(props) {
    return (
        <div className="text-center">
            <h1>{props.titulo}</h1>

            {props.components &&
                <div className="mt-10 flex justify-around flex-wrap">
                    {props.components.map((component) => (
                        <div className="inpDiv">
                        <p className="inpParg flex justify-start">{component.title}</p>
                        {component.comp}
                        </div>
                    ))}
                </div>
            }

            
        <div className="mt-10 mb-5 ml-5">
            <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Etapa 1" />
                <FormControlLabel control={<Checkbox />} label="Etapa 2" />
                <FormControlLabel control={<Checkbox />} label="Etapa 3" />
            </FormGroup>
        </div>
        {/* <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
            <FormControlLabel required control={<Checkbox />} label="Required" />
            <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
        </FormGroup> */}

            <div>{props.nomeBotao && <Botao name={props.nomeBotao} />}</div>
        </div>
    );
};