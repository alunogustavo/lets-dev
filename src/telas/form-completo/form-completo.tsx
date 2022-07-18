import React, { FormEvent, useEffect, useState } from "react";
import * as s from "./styled-form-completo";
import { Banner } from "../../imagens";
import Titulo from "../../componentes/Titulo";
import {
  ColumnInput,
  Label,
  Row,
  RowSelectors,
  InputButton,
  Footer,
} from "../../componentes";

const FormCompleto: React.FC = () => {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [ocupacao, setOcupacao] = useState("");
  const [areaPreferencia, setareaPreferencia] = useState("Front-end");
  const [curriculo, setCurriculo] = useState<any>();
  const [descricaoPerfil, setDescricaoPerfil] = useState("");
  const [receberEmail, setReceberEmail] = useState(false);
  console.log("idade :>>", idade);
  function enviarFormulario(event: FormEvent) {
    event.preventDefault();

    const mensagem = `${nome}, tem ${idade} anos e atualmente é ${ocupacao}. Se ingressar no mundo do desenvolvimento, tem preferência por atuar como ${areaPreferencia}.
       Em sua descrição de perfil consta: "${descricaoPerfil}".
       Deseja receber e-mail: ${receberEmail ? "Sim" : "Não"}
       Currículo: ${curriculo ? curriculo?.name : "Não informado"}
       `;
    alert(mensagem);
  }

  const cancelar = (event: FormEvent) => {
    // Evita o redirecionamento padrão pra outra tela e manda um alert
    event.preventDefault();
    window.location.href = "/";
  };

  useEffect(() => {
    console.log("OIII");
  }, []);

  return (
    <>
      <s.Image src={Banner} alt="Imagem Let's Dev" />
      <s.Container>
        <Titulo titulo="Formulario 2º Edição" />

        {/* Pode dar o nome que fizer sentido pra você: <H2>, <instrucao>*/}
        <s.H2>
          Seja Bem - Vindo(a) ao primeiro desafio da aula de Front - End do
          Let´s Dev!
        </s.H2>

        <s.Instrucao>
          Preencha corretamente os campos abaixo para ingressar nessa SUPER
          JORNADA com o time Paipe!
        </s.Instrucao>

        <s.Divisor />

        {/*Aqui começa os items agrupados em coluna*/}
        <s.Formulario onSubmit={enviarFormulario}>
          <s.Aviso>
            <strong>ATENÇÃO:</strong> os campos contendo os astericos (*) são de
            preenchimento obrigatorio!
          </s.Aviso>

          {/*Aqui começa os inputs de digitação*/}
          <Row>
            <ColumnInput className="input-text">
              <Label>Nome Completo: *</Label>
              <input
                type="text"
                name="nome"
                placeholder="Digite seu nome aqui"
                required
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </ColumnInput>
            <ColumnInput>
              <Label>Idade:</Label>
              <input
                type="number"
                name="Idade"
                placeholder="Digite sua Idade aqui"
                value={idade}
                onChange={(e) => setIdade(e.target.value)}
              />
            </ColumnInput>
          </Row>
          {/* Aqui começam os inputs de seleção */}
          <Row>
            <ColumnInput className="select">
              <Label>Ocupação:</Label>
              <select
                name="ocupacao"
                value={ocupacao}
                onChange={(e) => setOcupacao(e.target.value)}
              >
                <option>Selecione sua Ocupação</option>
                <option>Estudante</option>
                <option>Trabalhador CLT</option>
                <option>Autônomos</option>
                <option>Outros</option>
              </select>
            </ColumnInput>
            {/*Aqui continua os inputs de seleção*/}
            <ColumnInput>
              <Label>Área de preferência:</Label>
              <Row style={{ gap: "25px" }}>
                <RowSelectors>
                  <input
                    type="radio"
                    id="front"
                    name="area-preferencia"
                    value="Front-end"
                    checked={areaPreferencia === "Front-end"}
                    onChange={(e) => setareaPreferencia(e.target.value)}
                  />
                  <Label htmlFor="Front">Front-end</Label>
                </RowSelectors>
                <RowSelectors>
                  <input
                    type="radio"
                    id="back"
                    name="area-preferencia"
                    value="Back-end"
                    checked={areaPreferencia === "Back-end"}
                    onChange={(e) => setareaPreferencia(e.target.value)}
                  />
                  <Label htmlFor="back">Back-end</Label>
                </RowSelectors>
                <RowSelectors>
                  <input
                    type="radio"
                    id="full"
                    name="area-preferencia"
                    value="Full stack"
                    checked={areaPreferencia === "Full stack"}
                    onChange={(e) => setareaPreferencia(e.target.value)}
                  />
                  <Label htmlFor="full">Full stack</Label>
                </RowSelectors>
              </Row>
            </ColumnInput>
          </Row>

          {/*Aqui começa os botões textarea e checkbox*/}
          <ColumnInput>
            <Label>Anexar curriculo:</Label>
            <InputButton
              type="file"
              name="curriculo"
              //value={curriculo}
              onChange={(e) => setCurriculo(e.target ?.files[0])}
            />
          </ColumnInput>

          <ColumnInput
            className="column-input"
            style={{ marginBottom: "50px" }}
          >
            <Label>Descrição de perfil do candidato:</Label>
            <textarea
              name="descricao-perfil"
              placeholder="Fale um pouco sobre seu perfil pessoal e profissional"
              value={descricaoPerfil}
              onChange={(e) => setDescricaoPerfil(e.target.value)}
            ></textarea>
          </ColumnInput>

          <ColumnInput style={{ marginBottom: "115px" }}>
            <RowSelectors>
              <input
                type="checkbox"
                name="receber-email"
                id="receber-email"
                checked={receberEmail}
                onChange={(e) => setReceberEmail(!receberEmail)}
              />
              <Label htmlFor="receber-email">
                Deseja receber notificaçoes sobre vagas por e-email
              </Label>
            </RowSelectors>
          </ColumnInput>

          <Row style={{ justifyContent: "space-between" }}>
            <InputButton
              type="button"
              onClick={cancelar}
              value="Cancelar"
              outlined
            />
            <InputButton type="submit" value="Enviar" />
          </Row>
        </s.Formulario>
        {/* Aqui está o agrupamento dos inputs em coluna */}
      </s.Container>
      <Footer />
    </>
  );
};

export default FormCompleto;
