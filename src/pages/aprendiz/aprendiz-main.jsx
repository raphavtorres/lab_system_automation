import BotaoServico from "../../components/aprendiz/BotaoServico";
import Botao from "../../components/Botao";

import ImgResponsavel from "../../assets/responsavel_personagem.png";
import ImgEmprestimo from "../../assets/emprestimo-icone.png";
import ImgProblema from "../../assets/problema-icone.png";


export default function Aprendiz() {

    return (
        <div className="App">
            <div className="divBtnServ">
                <BotaoServico
                    name="Empréstimo"
                    src={ImgEmprestimo}
                    href="/aprendiz/emprestimo"
                />
                <BotaoServico
                    name="Relatar Problema"
                    src={ImgProblema}
                    href="/aprendiz/problema"
                />
            </div>
            <div>
                <div className="flex justify-center items-center">
                    <img src={ImgResponsavel} alt="" />
                    <p className="pargAvisoEmprestimo ml-16">
                        Você fez um empréstimo. <br />
                        É responsável pelo NOTEBOOK e FONTE! <br />
                        Após DEVOLVER clique no botão abaixo. <br />
                    </p>
                </div>
                <Botao name="Devolvido" />
            </div>
        </div>
    );
};