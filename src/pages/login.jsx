import Container from "../components/Container";


export default function Login() {
    return (
        <>
        <Container 
            titulo="Login" 
            nomeBotao="Login"
            semConta={true}
            fields={[
                {
                    id: "",
                    class: "edv",
                    type: "text",
                    placeholder: "EDV: ",
                    title: ""
                },
                {
                    id: "",
                    class: "senha",
                    type: "text",
                    placeholder: "Senha:",
                    title: ""
                },
        ]} />    
        </>
    );
};