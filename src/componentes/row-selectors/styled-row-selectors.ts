import styled from "styled-components";

export const RowSelectors = styled.div`
  /* Alinha todos os radio em coluna com seus respectivos labels */
  display: flex;
  align-items: center;
  gap: 10px;

  input{type="radio" {
    /* Aumento o tamanho dos radio buttons */
    width: 25px;
    height: 25px;
  }

  input[type="radio"],
  input[type="checkbox"],
   // Colore os inputs
   accent-color: #7d2eba;

    // Coloca um cursos pointer
    cursor: pointer;
  }

  /* Coloca os labels dos radio buttons com a fonte padrão novamente */
  label {
    font-weight: 400;
  }
 `;