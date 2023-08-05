import Container from "../components/Container";

export default function Cadastro() {
    return (
        <>
        <Container 
            titulo="Cadastro"
            nomeBotao="Cadastrar"
            grid={true}
            fields={[
            {
                id: "",
                class: "edv",
                type: "text",
                placeholder: "Insira seu EDV: ",
                title: ""
            },
            {
                id: "",
                class: "nome",
                type: "text",
                placeholder: "Insira seu nome: ",
                title: ""
            },
            {
                id: "",
                class: "senha",
                type: "text",
                placeholder: "Insira uma senha:",
                title: ""
            },
            {
                id: "",
                class: "senha",
                type: "text",
                placeholder: "Confirme sua senha:",
                title: ""
            },
            {
                id: "",
                class: "curso",
                type: "text",
                placeholder: "Insira seu curso:",
                title: ""
            },
        ]} />
        </>
    );
};