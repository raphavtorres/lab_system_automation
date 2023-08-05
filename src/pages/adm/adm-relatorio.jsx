import Dropdown from '../../components/Dropdown.jsx';
import SearchBar from '../../components/Searchbar.jsx';
import Modal from '../../components/Modal.jsx';

export default function Adm() {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'comer', label: 'Comer' },
    ];

    return (
        <div className="searchBarDiv">
            
            <Dropdown options={options}/>
            <SearchBar />
            <Modal />
            
        </div>
    );
};
