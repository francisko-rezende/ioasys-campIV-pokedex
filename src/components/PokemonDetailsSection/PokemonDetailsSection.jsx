import React from "react";
import * as S from "./PokemonDetailsSection.style";
import Details2ndaryHeader from "../Details2ndaryHeader";
import PokemonBaseStats from "../PokemonBaseStats/PokemonBaseStats";
import PokemonFlavorText from "../PokemonFlavorText";
import PokemonTraitList from "../PokemonTraitList";
import PokemonTypeTag from "../PokemonTypeTag";

const PokemonDetailsSection = ({ mode, pokemon, pokemonType }) => {
  return (
    <S.DetailsContainer mode={mode}>
      <Details2ndaryHeader pokemon={pokemon} pokemonType={pokemonType} />
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
