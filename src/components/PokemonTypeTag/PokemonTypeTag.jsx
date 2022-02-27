import React from "react";
import * as S from "./PokemonTypeTag.style";

const PokemonTypeTag = ({ pokemonType }) => {
  return (
    <S.PokemonTypeTag pokemonType={pokemonType}>{pokemonType}</S.PokemonTypeTag>
  );
};

export default PokemonTypeTag;
