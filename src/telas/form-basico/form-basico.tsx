import React, { FormEvent } from "react";
import "./styles-form-basico.css";
import { Banner, logo } from "../../imagens";
// import { Container } from './styles';

const FormBasico: React.FC = () => {
  function tagPorNome(nomeTag: string, isRadioButton: boolean = false) {
    const tag = document.getElementsByName(nomeTag) as any;
    if (isRadioButton) {
      for (let pos = 0; pos < tag.length; pos++) {
        if (tag[pos].checked) return tag[pos];
      }
    } else return tag[0];
  }

  function enviarFormulario(event: FormEvent) {
    event.preventDefault();
    const nome = tagPorNome("nome")?.value;
    const idade = tagPorNome("idade")?.value;
    const ocupacao = tagPorNome("ocupacao")?.value;
    const areaPreferencia = tagPorNome("area-preferencia", true)?.value;
    const curriculo = tagPorNome("curriculo");
    const descricaoPerfil = tagPorNome("descricao-perfil")?.value;
    const receberEmail = tagPorNome("receber-email")?.value;
    const mensagem = `${nome}, tem ${idade} anos e atualmente é ${ocupacao}. Se ingressar no mundo do desenvolvimento, tem preferência por atuar como ${areaPreferencia}.
       Em sua descrição de perfil consta: "${descricaoPerfil}".
       Deseja receber e-mail: ${receberEmail ? "Sim" : "Não"}
       Currículo: ${curriculo ? curriculo.files[0].name : "Não informado"}
    `;
    alert(mensagem);
  }

  const cancelar = (event: FormEvent) => {
    // Evita o redirecionamento padrão pra outra tela e manda um alert
    event.preventDefault();
    window.location.href = "/";
  };

  return (
    <div id="container">
      <h1>Formulario 2º Edição</h1>
      <h2>
        Seja Bem - Vindo(a) ao primeiro desafio da aula de Front - End do Let´s
        Dev!
      </h2>

      <p id="instrucao">
        Preencha corretamente os campos abaixo para ingressar nessa SUPER
        JORNADA com o time Paipe!
      </p>
      <img src={logo} alt="Imagem Lets-Dev" />
      <hr />

      {/*Aqui começa os items agrupados em coluna*/}
      <form onSubmit={enviarFormulario}>
        <p id="aviso">
          <strong>ATENÇÃO:</strong> os campos contendo os astericos (*) são de
          preenchimento obrigatorio!
        </p>

        {/*Aqui começa os inputs de digitação*/}
        <div className="row">
          <div className="column-input input-text">
            <label>Nome Completo: *</label>
            <input
              type="text"
              name="nome"
              placeholder="Digite seu nome aqui"
              required
            />
          </div>

          <div className="column-input">
            <label>Idade:</label>
            <input
              type="number"
              name="idade"
              placeholder="Digite sua Idade aqui"
              required
            />
          </div>
        </div>
        {/*Aqui começa os inputs de seleção*/}
        <div className="row">
          <div className="column-input select">
            <label>Ocupação:</label>
            <select name="ocupacao">
              <option>Selecione sua Ocupação</option>
              <option>Estudante</option>
              <option>Trabalhador CLT</option>
              <option>Autônomos</option>
              <option>Outros</option>
            </select>
          </div>
          {/*Aqui começa os inputs de seleção*/}
          <div className="column-input">
            <label>Área de preferência:</label>
            <div className="row" style={{ gap: "25px" }}>
              <div className="row-selectors">
                <input
                  type="radio"
                  id="front"
                  name="area-preferencia"
                  value="Front-end"
                  checked
                />
                <label htmlFor="Front">Front-end</label>
              </div>
              <div className="row-selectors">
                <input
                  type="radio"
                  id="back"
                  name="area-preferencia"
                  value="Back-end"
                />
                <label htmlFor="back">Back-end</label>
              </div>
              <div className="row-selectors">
                <input
                  type="radio"
                  id="full"
                  name="area-preferencia"
                  value="Full stack"
                />
                <label htmlFor="full">Full stack</label>
              </div>
            </div>
          </div>
        </div>
        {/*Aqui começa os botões textarea e checkbox*/}
        <div className="column-input">
          <label>Anexar curriculo:</label>
          <input type="file" name="curriculo" />
        </div>

        <div className="column-input" style={{ marginBottom: "50px" }}>
          <label>Descrição de perfil do candidato:</label>
          <textarea
            name="descricao-perfil"
            placeholder="Fale um pouco sobre seu perfil pessoal e profissional"
          ></textarea>
        </div>

        <div className="column-input" style={{ marginBottom: "115px" }}>
          <div className="row-selectors">
            <input type="checkbox" name="receber-email" id="receber-email" />
            <label htmlFor="receber-email">
              Deseja receber notificaçoes sobre vagas por e-email
            </label>
          </div>
        </div>

        <div className="row" style={{ justifyContent: "space-between" }}>
          <button onClick={cancelar}>Cancelar</button>
          <input type="submit" value="Enviar" />
        </div>
      </form>
      {/* Aqui está o agrupamento dos inputs em coluna */}
    </div>
  );
};
export default FormBasico;
