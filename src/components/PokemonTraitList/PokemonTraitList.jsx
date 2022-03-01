import React from "react";

import PropTypes from "prop-types";

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

PokemonTraitList.propTypes = {
  pokemon: PropTypes.shape({
    abilities: PropTypes.array,
    base_experience: PropTypes.number,
    forms: PropTypes.array,
    game_indices: PropTypes.array,
    height: PropTypes.number,
    held_items: PropTypes.array,
    id: PropTypes.number,
    is_default: PropTypes.bool,
    location_area_encounters: PropTypes.string,
    moves: PropTypes.array,
    name: PropTypes.string,
    order: PropTypes.number,
    past_types: PropTypes.array,
    species: PropTypes.object,
    sprites: PropTypes.object,
    stats: PropTypes.array,
    types: PropTypes.array,
    weight: PropTypes.number,
  }),
  mode: PropTypes.string,
};

export default PokemonTraitList;
