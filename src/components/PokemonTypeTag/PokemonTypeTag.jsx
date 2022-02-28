import React from "react";
import * as S from "./PokemonTypeTag.style";
import PropTypes from "prop-types";

const PokemonTypeTag = ({ pokemonType }) => {
  return (
    <S.PokemonTypeTag pokemonType={pokemonType}>{pokemonType}</S.PokemonTypeTag>
  );
};

PokemonTypeTag.propTypes = {
  pokemonType: PropTypes.oneOf([
    "rock",
    "ghost",
    "steel",
    "water",
    "grass",
    "psychic",
    "ice",
    "dark",
    "fairy",
    "normal",
    "fighting",
    "flying",
    "poison",
    "ground",
    "bug",
    "fire",
    "electric",
    "dragon",
  ]),
};

export default PokemonTypeTag;
