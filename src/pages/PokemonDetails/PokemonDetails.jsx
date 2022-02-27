import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import Background from "../../components/Background";
import TraitListItem from "../../components/TraitListItem";
import HeightIcon from "../../components/HeightIcon";
import WeightIcon from "../../components/WeightIcon";
import { ReactComponent as BackArrow } from "../../assets/icons/back-svgomg.svg";
import * as S from "./PokemonDetails.style";
import * as helpers from "../../helpers";
import api from "../../services/api";
import Head from "../../components/Head";
import { capitalizeWord } from "../../helpers/capitalizeWord";
import AnimatedPage from "../../components/AnimatedPage";
import Details2ndaryHeader from "../../components/Details2ndaryHeader";
import PokemonTypeTag from "../../components/PokemonTypeTag";

const About = () => {
  const location = useLocation();
  const previousPage = helpers.getPreviousPageAddress(location);
  const { pokemon } = location.state;
  const pokemonType = pokemon.types[0].type.name;

  const store = useSelector((store) => store);
  const { currentMode } = store.mode;

  const [flavorText, setFlavorText] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    api
      .get(`/pokemon-species/${pokemon.name}`)
      .then(({ data }) => {
        const isLanguageEN = ({ language }) => language.name === "en";
        const englishFlavorTextObj =
          data.flavor_text_entries.find(isLanguageEN);

        if (englishFlavorTextObj) {
          setFlavorText(englishFlavorTextObj.flavor_text);
          return;
        }

        setFlavorText(data.flavor_text_entries[0].flavor_text);
      })
      .catch((error) => console.log(error));
  }, [pokemon.name]);

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
            <S.PokemonTraitList mode={currentMode}>
              <TraitListItem fadedText="weight">
                <WeightIcon mode={currentMode} /> {pokemon.weight / 10} kg
              </TraitListItem>
              <TraitListItem fadedText="height">
                <HeightIcon mode={currentMode} /> {pokemon.height / 10} m
              </TraitListItem>
              <TraitListItem fadedText="moves">
                {helpers.getFormattedMoves(pokemon)}
              </TraitListItem>
            </S.PokemonTraitList>
            <S.PokemonFlavorText pokemonType={pokemonType} mode={currentMode}>
              {flavorText}
            </S.PokemonFlavorText>
            <S.BaseStatsTitle pokemonType={pokemonType}>
              Base Stats
            </S.BaseStatsTitle>
            <ul>
              {pokemon.stats.map((item) => (
                <S.BaseStatItem key={item.stat.name}>
                  <S.BaseStatName pokemonType={pokemonType}>
                    {helpers.abbreviateBaseStatName(item.stat.name)}
                  </S.BaseStatName>
                  <S.BaseStatValue mode={currentMode}>
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

export default About;
