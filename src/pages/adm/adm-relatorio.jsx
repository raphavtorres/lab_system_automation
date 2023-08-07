import Dropdown from '../../components/Dropdown.jsx';
import SearchBar from '../../components/Searchbar.jsx';
import Modal from '../../components/Modal.jsx';
import ModalAdm from '../../components/adm/ModalAdm.jsx';
import Selectbox from "../../components/Selectbox";

export default function Adm() {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'comer', label: 'Comer' },
    ];
    const computadores = [
        { name: 'CA0051', },
        { name: 'CA5600'},
    ];

    const locais = [
        { name: 'DS1-02', },
        { name: 'DS2-01'},
    ];


    return (
        <>
        <div className="w-3/4 mt-10 flex justify-between self-start">
            <Dropdown options={options}/>
            <SearchBar />
        </div>
        <Modal component={
            <ModalAdm 
                titulo="Cadastrar" 
                nomeBotao="Cadastrar"
                components={[
                    {title: "ID computador", comp: <Selectbox options={computadores} />},
                    {title: "Local", comp: <Selectbox options={locais} />},
                ]} 
            />
        } />
        </>
    );

    // PARA CRIAR A TABELA: https://blog.betrybe.com/react/react-table/
};
