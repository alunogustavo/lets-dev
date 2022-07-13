import { ReactNode } from "react";
import { logo } from "../../imagens";
import * as s from "./styled-card";

interface CardProps {
  titulo: string;
  link: string;
  descricao: string | ReactNode;
}

const Card = ({ titulo, link, descricao }: CardProps) => {
  return (
    <s.Container href={link}>
      <img src={logo} alt="Imagem Let's Dev" />
      <a href={link}>{titulo}</a>
      {typeof descricao === "string" ? <p>{descricao}</p> : descricao}
    </s.Container>
  );
};

export default Card;
