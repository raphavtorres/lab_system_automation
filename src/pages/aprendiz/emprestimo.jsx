import Container from "../../components/Container.jsx";

export default function Emprestimo() {
    return (
        <>
        <Container 
            titulo="Empréstimo" 
            nomeBotao="Enviar"
            fields={[
                {
                    id: "",
                    class: "motivoEmprestimo",
                    type: "text-box",
                    placeholder: "Descreva o motivo do empréstimo...",
                    title: "Motivo"
                },
        ]} />    
        </>
    );
};
