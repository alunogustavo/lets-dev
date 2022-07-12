import styled from "styled-components";

export const ColumnInput = styled.div`
  /* Alinha todos os labels em coluna com seus respectivos inputs */
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 70px;

  .input-text {
    /* Faz o input usar 50% do container dele */
    width: 30%;
  }

  // estiliza todos os inputz que virão como children
  input[type="text"],
  input[type="Number"],
  select,
  textarea {
    /* Padroniza o estilo dos inputs */
    border: 1px solid #201e1f;
    padding: 10px;
    height: 35px;

    // Arrendonda a borda e destaca ao clicar
    border-radius: 5px;
  }

  :focus {
    outline: 1px solid #7d2eba;
  }
}

 select {
    /* ajusta o espaçamento, pois o que padroniza zoa o select */
    padding: 0 5px;

    // colocaum curso pointer
    cursor: pointer;
 }
`;