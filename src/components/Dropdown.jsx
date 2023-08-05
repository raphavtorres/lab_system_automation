import React, { useState } from 'react';
import Select from 'react-select';


// const options = [
//     { value: 'chocolate', label: 'Chocolate' },
//     { value: 'strawberry', label: 'Strawberry' },
//     { value: 'vanilla', label: 'Vanilla' },
//     { value: 'comer', label: 'Comer' },
// ];


export default function Dropdown(props) {
    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <div className="App">
            <Select
                placeholder="Selecione..."
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={props.options}
            />
        </div>
    );
};