import styled from 'styled-components';

export const Image = styled.img`
  width: 100%;
`;

export const Container = styled.div`
 /* definir o item em coluna */
  display: flex;
  flex-direction: column;
  align-items: center;

 /* limite o conteudo para conter nos notebooks */
  max-width: 1200px;

 /* espaço interno dos elementos */
  padding: 90px;
`;

export const H2 = styled.h2`
   text-align: center;
`;

export const Instrucao = styled.p`
  text-align: center;

  // Mudar estilo de: margin: 20px 0 60px 0 para:
  margin: 20px 0 0 0;
`;

export const Divisor = styled.hr`
 background: #e5e5e5;
 height: 1px;
 width: 100px;
 margin: 100px 0 35px 0;

`

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;


 // estiliza o textarea dentro do form mesmo
  textarea {
    min-height: 100px;
    max-height: 200px;
    min-width: 50%;
    max-width: 100%;
  }
`;

export const Aviso = styled.p`
   font-weight: 500;
   margin-bottom: 100px;

   // Estiliza o strong dentro do p mesmo
   strong {
    font-weight: 600;
    color: #bd041a;
   }
`;
