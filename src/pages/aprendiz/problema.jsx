import ContainerAprendiz from "../../components/aprendiz/ContainerAprendiz";
import Selectbox from "../../components/Selectbox.jsx";

export default function Problema() {
    const computadores = [
        { name: 'CA0051', },
        { name: 'CA5600'},
    ];

    const locais = [
        { name: 'DS1-02', },
        { name: 'DS2-01'},
    ];

    const mesas = [
        { name: '01', },
        { name: '02'},
    ];

    return (
        <div className="flex flex-wrap w-full justify-evenly">
        <ContainerAprendiz 
            titulo="Computador" 
            nomeBotao="Enviar"
            components={[
                {title: "ID computador", comp: <Selectbox options={computadores} />},
                {title: "Local", comp: <Selectbox options={locais} />},
            ]}
            fields={[
                {
                    placeholder: "Descreva o problema do computador...",
                    title: "Descrição"
                },
        ]} />

        <ContainerAprendiz 
            titulo="5S" 
            nomeBotao="Enviar"
            components={[
                {title: "Mesa", comp: <Selectbox options={computadores} />},
                {title: "Local", comp: <Selectbox options={locais} />},
            ]}
            fields={[
                {
                    placeholder: "Descreva o problema de 5S...",
                    title: "Descrição"
                },
        ]} />
        </div>
    );
};
