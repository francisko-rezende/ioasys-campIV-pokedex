import React from "react";
import * as S from "./PokemonTraitList.style";
import * as helpers from "../../helpers";
import TraitListItem from "../TraitListItem";
import WeightIcon from "../WeightIcon";
import HeightIcon from "../HeightIcon";

const PokemonTraitList = ({ pokemon, mode }) => {
  return (
    <S.PokemonTraitList mode={mode}>
      <TraitListItem fadedText="weight">
        <WeightIcon mode={mode} /> {pokemon.weight / 10} kg
      </TraitListItem>
      <TraitListItem fadedText="height">
        <HeightIcon mode={mode} /> {pokemon.height / 10} m
      </TraitListItem>
      <TraitListItem fadedText="moves">
        {helpers.getFormattedMoves(pokemon)}
      </TraitListItem>
    </S.PokemonTraitList>
  );
};

export default PokemonTraitList;
