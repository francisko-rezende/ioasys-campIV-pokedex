import React from "react";

import PropTypes from "prop-types";

import * as helpers from "../../helpers";
import * as S from "./PokemonBaseStats.style";

const PokemonBaseStats = ({ pokemonType, pokemon, mode }) => {
  return (
    <>
      <S.BaseStatsTitle pokemonType={pokemonType}>Base Stats</S.BaseStatsTitle>
      <ul>
        {pokemon.stats.map((item) => (
          <S.BaseStatItem key={item.stat.name}>
            <S.BaseStatName pokemonType={pokemonType}>
              {helpers.abbreviateBaseStatName(item.stat.name)}
            </S.BaseStatName>
            <S.BaseStatValue mode={mode}>
              {helpers.convertToThreeDigitNumber(item.base_stat)}
            </S.BaseStatValue>{" "}
            <S.BarWrapper
              role="progressbar"
              aria-valuenow={item.base_stat}
              aria-valuemin="0"
              aria-valuemax="255"
              pokemonType={pokemonType}
            >
              <S.Bar pokemonType={pokemonType} value={item.base_stat} />
            </S.BarWrapper>
          </S.BaseStatItem>
        ))}
      </ul>
    </>
  );
};

PokemonBaseStats.propTypes = {
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
  mode: PropTypes.string,
};

export default PokemonBaseStats;
