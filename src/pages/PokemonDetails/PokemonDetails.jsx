import React from "react";

import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import AnimatedPage from "../../components/AnimatedPage";
import Background from "../../components/Background";
import Head from "../../components/Head";
import PokemonDetailsPictureArea from "../../components/PokemonDetailsPictureArea";
import PokemonDetailsSection from "../../components/PokemonDetailsSection";
import { capitalizeWord } from "../../helpers/capitalizeWord";
import * as S from "./PokemonDetails.style";

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
          description={`Aqui você encontra tudo o que pode querer saber sobre ${capitalizeWord(
            pokemon.name
          )}s`}
        />
        <S.MainContainer>
          <S.Header />
          <PokemonDetailsSection
            mode={currentMode}
            pokemon={pokemon}
            pokemonType={pokemonType}
          />
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
