import Dropdown from '../../components/Dropdown.jsx';
import SearchBar from '../../components/Searchbar.jsx';
import Modal from '../../components/Modal.jsx';
import ModalAdm from '../../components/adm/ModalAdm.jsx';
import Selectbox from "../../components/Selectbox.jsx";

import IconeAdicionar from '../../assets/adicionar.png'

export default function Adm() {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'comer', label: 'Comer' },
    ];

    const locais = [
        { name: 'DS1-02', },
        { name: 'DS2-01'},
    ];


    return (
        <>
        <div className="dropdown-div">
            <Dropdown options={options}/>
            <SearchBar />
        </div>
        
        <Modal 
            class="signup-modal-btn"
            btnAbrir={<img src={IconeAdicionar} alt="" />}
            component={
                <ModalAdm 
                    titulo="Cadastrar" 
                    nomeBotao="Cadastrar"
                    components={[
                        {title: "ID computador", comp: <input placeholder="ID computador" className="inputText" type="text" />},
                        {title: "Local", comp: <Selectbox options={locais} />},
                    ]} 
                />
        } />

        <Modal 
            class=""
            btnAbrir="Modificar"
            component={
                <ModalAdm 
                    titulo="Modificar" 
                    nomeBotao="Modificar"

                    components={[
                        {title: "ID computador", comp: <input placeholder="ID computador" className="text-inp" type="text" />},
                        {title: "Local", comp: <Selectbox options={locais} />},
                    ]} 
                />
        } />
        </>
    );

    // PARA CRIAR A TABELA: https://blog.betrybe.com/react/react-table/
};
