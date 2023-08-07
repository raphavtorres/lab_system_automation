import { Icon } from '@iconify/react';
import { useState } from 'react';


export default function SearchBar() {

    const [valorDaBusca, setValorDaBusca] = useState();
    return (
        <div className="searchbar">
            <input className="" type="text" placeholder="Pesquise" onChange={(event) => {
                setValorDaBusca(event.target.value);
            }} />
            <button><Icon icon="simple-line-icons:magnifier" /></button>


        </div>
    );
};