import React from "react";
import * as S from "./PokemonTypeTag.style";

const PokemonTypeTag = ({ key, pokemonType }) => {
  return (
    <S.PokemonTypeTag key={key} pokemonType={pokemonType}>
      {pokemonType}
    </S.PokemonTypeTag>
  );
};

export default PokemonTypeTag;
