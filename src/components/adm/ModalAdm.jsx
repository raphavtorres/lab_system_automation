import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Botao from "../Botao";

export default function ModalAdm(props) {
    return (
        <div className="modal-adm-div">
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

            <div className="checkboxes">
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