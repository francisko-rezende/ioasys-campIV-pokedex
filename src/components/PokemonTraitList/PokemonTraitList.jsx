import React from "react";

import * as helpers from "../../helpers";
import HeightIcon from "../HeightIcon";
import TraitListItem from "../TraitListItem";
import WeightIcon from "../WeightIcon";
import * as S from "./PokemonTraitList.style";

const PokemonTraitList = ({ pokemon, mode }) => {
  return (
    <S.PokemonTraitList mode={mode}>
      <TraitListItem traitName="weight">
        <WeightIcon mode={mode} /> {pokemon.weight / 10} kg
      </TraitListItem>
      <TraitListItem traitName="height">
        <HeightIcon mode={mode} /> {pokemon.height / 10} m
      </TraitListItem>
      <TraitListItem traitName="moves">
        {helpers.getFormattedMoves(pokemon)}
      </TraitListItem>
    </S.PokemonTraitList>
  );
};

export default PokemonTraitList;
