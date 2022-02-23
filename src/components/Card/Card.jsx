import React from "react";
import { useSelector } from "react-redux";
import * as S from "./Card.style";

// Todo create styled container for Card (check the inline style below)
// todo refactor getSvgBaseAddress and formatId into their own modules (?) inside the helper folder

const Card = (pokemon) => {
  const { currentMode } = useSelector(({ mode }) => mode);

  const { id, name, types } = pokemon;
  const type = types[0].type.name;

  const getSvgBaseAddress = (id) =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;

  const formatId = (id) => {
    const idLength = String(id).length;

    switch (idLength) {
      case 1:
        return `#00${id}`;
      case 2:
        return `#0${id}`;
      default:
        return `#${id}`;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <S.Card to={name} type={type} state={{ pokemon }} mode={currentMode}>
        <S.Id type={type}>{formatId(id)}</S.Id>
        <S.Photo
          src={getSvgBaseAddress(id)}
          alt={`Uma foto de um/uma ${name}`}
          width="94.37px"
          height="94.37px"
        />

        <S.Name type={type}>{name}</S.Name>
      </S.Card>
    </div>
  );
};

export default Card;
