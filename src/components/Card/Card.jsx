import React from "react";
import { useSelector } from "react-redux";
import * as helpers from "../../helpers";
import * as S from "./Card.style";

const Card = (pokemon) => {
  const { currentMode } = useSelector(({ mode }) => mode);

  const { id, name, types } = pokemon;
  const type = types[0].type.name;

  return (
    <S.Container>
      <S.Card to={name} type={type} state={{ pokemon }} mode={currentMode}>
        <S.Id type={type}>#{helpers.convertToThreeDigitNumber(id)}</S.Id>
        <S.Photo
          src={helpers.getSvgAddress(id)}
          alt={`Uma foto de um/uma ${name}`}
          width="94.37px"
          height="94.37px"
        />

        <S.Name type={type}>{name}</S.Name>
      </S.Card>
    </S.Container>
  );
};

export default Card;
