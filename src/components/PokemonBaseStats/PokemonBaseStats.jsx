import React from "react";

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

export default PokemonBaseStats;
