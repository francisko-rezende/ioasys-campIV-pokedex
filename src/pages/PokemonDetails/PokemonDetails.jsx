import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import Background from "../../components/Background";
import { ReactComponent as BackArrow } from "../../assets/icons/back-svgomg.svg";
import * as S from "./PokemonDetails.style";
import * as helpers from "../../helpers";
import Head from "../../components/Head";
import { capitalizeWord } from "../../helpers/capitalizeWord";
import AnimatedPage from "../../components/AnimatedPage";
import Details2ndaryHeader from "../../components/Details2ndaryHeader";
import PokemonTypeTag from "../../components/PokemonTypeTag";
import PokemonTraitList from "../../components/PokemonTraitList";
import PokemonFlavorText from "../../components/PokemonFlavorText/PokemonFlavorText";
import PokemonBaseStats from "../../components/PokemonBaseStats/PokemonBaseStats";

const PokemonDetails = () => {
  const location = useLocation();
  const previousPage = helpers.getPreviousPageAddress(location);
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
          <S.PokemonPicContainer pokemonType={pokemonType}>
            <S.AboutWrapper>
              <S.BackLink to={previousPage}>
                <BackArrow /> Voltar
              </S.BackLink>
              <S.SecondaryTitle>About</S.SecondaryTitle>
            </S.AboutWrapper>
            <S.PokemonPicWrapper>
              <S.PokemonPic
                src={helpers.getSvgAddress(pokemon.id)}
                alt={`Foto do/da ${pokemon.name}`}
              />
            </S.PokemonPicWrapper>
          </S.PokemonPicContainer>
        </S.MainContainer>
      </AnimatedPage>
    </Background>
  );
};

export default PokemonDetails;
