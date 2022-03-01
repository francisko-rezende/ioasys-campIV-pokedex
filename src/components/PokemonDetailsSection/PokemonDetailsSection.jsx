import React from "react";

import PropTypes from "prop-types";

import PokemonBaseStats from "../PokemonBaseStats/PokemonBaseStats";
import PokemonDetailsHeader from "../PokemonDetailsHeader";
import PokemonFlavorText from "../PokemonFlavorText";
import PokemonTraitList from "../PokemonTraitList";
import PokemonTypeTag from "../PokemonTypeTag";
import * as S from "./PokemonDetailsSection.style";

const PokemonDetailsSection = ({ mode, pokemon, pokemonType }) => {
  return (
    <S.DetailsContainer mode={mode}>
      <PokemonDetailsHeader pokemon={pokemon} pokemonType={pokemonType} />
      {pokemon.types.map(({ type }) => (
        <PokemonTypeTag key={type.name} pokemonType={type.name} />
      ))}
      <PokemonTraitList pokemon={pokemon} mode={mode} />
      <PokemonFlavorText pokemon={pokemon} mode={mode} />
      <PokemonBaseStats
        pokemon={pokemon}
        mode={mode}
        pokemonType={pokemonType}
      />
    </S.DetailsContainer>
  );
};

PokemonDetailsSection.propTypes = {
  mode: PropTypes.string,
  pokemonType: PropTypes.string,
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
};

export default PokemonDetailsSection;
