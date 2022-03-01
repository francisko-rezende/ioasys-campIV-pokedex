import React from "react";

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

export default PokemonDetailsSection;
