import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import Background from "../../components/Background";
import * as S from "./PokemonDetails.style";

import Head from "../../components/Head";
import { capitalizeWord } from "../../helpers/capitalizeWord";
import AnimatedPage from "../../components/AnimatedPage";
import Details2ndaryHeader from "../../components/Details2ndaryHeader";
import PokemonTypeTag from "../../components/PokemonTypeTag";
import PokemonTraitList from "../../components/PokemonTraitList";
import PokemonFlavorText from "../../components/PokemonFlavorText/PokemonFlavorText";
import PokemonBaseStats from "../../components/PokemonBaseStats/PokemonBaseStats";
import PokemonDetailsPictureArea from "../../components/PokemonDetailsPictureArea";

const PokemonDetails = () => {
  const location = useLocation();

  const { pokemon } = location.state;
  const pokemonType = pokemon.types[0].type.name;

  const store = useSelector((store) => store);
  const { currentMode } = store.mode;

  return (
    <Background mode={currentMode} pokemonType={pokemonType}>
      <AnimatedPage>
        <Head
          title={capitalizeWord(pokemon.name)}
          description={`Aqui você encontra tudo o que pode querer saber sober ${capitalizeWord(
            pokemon.name
          )}s`}
        />
        <S.MainContainer>
          <S.Header />
          <S.DetailsContainer mode={currentMode}>
            <Details2ndaryHeader pokemon={pokemon} pokemonType={pokemonType} />
            {pokemon.types.map(({ type }) => (
              <PokemonTypeTag key={type.name} pokemonType={type.name} />
            ))}
            <PokemonTraitList pokemon={pokemon} mode={currentMode} />
            <PokemonFlavorText pokemon={pokemon} mode={currentMode} />
            <PokemonBaseStats
              pokemon={pokemon}
              mode={currentMode}
              pokemonType={pokemonType}
            />
          </S.DetailsContainer>
          <PokemonDetailsPictureArea
            pokemon={pokemon}
            pokemonType={pokemonType}
          />
        </S.MainContainer>
      </AnimatedPage>
    </Background>
  );
};

export default PokemonDetails;
