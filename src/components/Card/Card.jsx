import React from "react";
import * as S from "./Card.styles";

const Card = ({ id, name, types }) => {
  const pokemonType = types[0].type.name;

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
      <S.Card href="#" pokemonType={pokemonType}>
        <S.Id pokemonType={pokemonType}>{formatId(id)}</S.Id>
        <S.Photo
          src={getSvgBaseAddress(id)}
          alt={`Uma foto de um/uma ${name}`}
          width="94.37px"
          height="94.37px"
        />

        <S.Name pokemonType={pokemonType}>{name}</S.Name>
      </S.Card>
    </div>
  );
};

export default Card;
