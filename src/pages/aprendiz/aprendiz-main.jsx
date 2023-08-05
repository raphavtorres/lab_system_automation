import BotaoServico from "../../components/aprendiz/BotaoServico";
import Botao from "../../components/Botao";

import ImgResponsavel from "../../assets/responsavel_personagem.png";
import ImgEmprestimo from "../../assets/emprestimo-icone.png";
import ImgProblema from "../../assets/problema-icone.png";

import './aprendiz.css';

export default function Aprendiz() {

    return (
        <div className="App">
            <div className="divBtnServ">
                <BotaoServico
                    name="Empréstimo"
                    src={ImgEmprestimo}
                    href="/"
                />
                <BotaoServico
                    name="Relatar Problema"
                    src={ImgProblema}
                />
            </div>
            <div>
                <img src={ImgResponsavel} alt="" />
                <p className="pargAvisoEmprestimo">
                    Você fez um empréstimo. <br />
                    É responsável pelo NOTEBOOK e FONTE! <br />
                    Após DEVOLVER clique no botão abaixo. <br />
                </p>
                <Botao name="Devolvido" />
            </div>
        </div>
    );
};