import ContainerAprendiz from "../../components/aprendiz/ContainerAprendiz";
import Selectbox from "../../components/Selectbox.jsx";

export default function Emprestimo() {
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
        <ContainerAprendiz 
            titulo="Empréstimo" 
            nomeBotao="Enviar"
            components={[
                {title: "ID computador", comp: <Selectbox options={computadores} />},
                {title: "Local", comp: <Selectbox options={locais} />},
            ]}
            fields={[
                {
                    placeholder: "Descreva o motivo do empréstimo...",
                    title: "Motivo"
                },
        ]} />
        </>
    );
};
