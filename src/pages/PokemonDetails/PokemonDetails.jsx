import axios from "axios";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  ADD_FAVORITE_POKEMON,
  REMOVE_FAVORITE_POKEMON,
} from "../../store/slices/favoritePokemonSlice";
import Background from "../../components/Background";
import FavoriteIcon from "../../components/FavoriteIcon";
import Header from "../../components/Header/Header";
import TraitListItem from "../../components/TraitListItem";
import HeightIcon from "../../components/HeightIcon";
import WeightIcon from "../../components/WeightIcon";
import { ReactComponent as BackArrow } from "../../assets/icons/back-svgomg.svg";
import * as S from "./PokemonDetails.style";
import useSaveInLocalStorage from "../../hooks/useSaveInLocalStorage";

const About = () => {
  const location = useLocation();
  const { pokemon } = location.state;
  const previousPage = location.pathname.split("/").slice(0, -1).join("/");

  const {
    mode: { mode },
    favoritePokemon: { favoritePokemonList },
  } = useSelector((store) => store);

  useSaveInLocalStorage("favoritePokemon", favoritePokemonList);

  const dispatch = useDispatch();
  const addToFavorites = () => {
    dispatch(ADD_FAVORITE_POKEMON(pokemon));
  };
  const removeFromFavorites = () => {
    dispatch(REMOVE_FAVORITE_POKEMON(pokemon));
  };

  const [isFavorite, setIsFavorite] = React.useState(false);

  React.useEffect(
    () =>
      setIsFavorite(
        favoritePokemonList.some(({ name }) => name === pokemon.name),
        [favoritePokemonList, pokemon.name]
      ),
    [favoritePokemonList, pokemon.name]
  );

  function getFormattedMoves(pokemon) {
    const capitalize = (word) => {
      const firstLetter = word[0];
      const capitalizedWord = word.replace(
        firstLetter,
        firstLetter.toUpperCase()
      );
      return capitalizedWord;
    };

    if (pokemon.abilities.length > 1) {
      return pokemon.abilities
        .slice(0, 2)
        .map(({ ability }) => ability.name)
        .map((abilityName) => capitalize(abilityName))
        .join(" / ");
    }
    return pokemon.abilities[0].ability.name;
  }

  const pokemonType = pokemon.types[0].type.name;
  const [flavorText, setFlavorText] = React.useState("");

  const getSvgAddress = (id) =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;

  const getThreeDigitNumber = (number) => {
    const numberLength = String(number).length;

    switch (numberLength) {
      case 1:
        return `00${number}`;
      case 2:
        return `0${number}`;
      default:
        return `${number}`;
    }
  };

  const abbreviateStatName = (stat) =>
    ({
      hp: "hp",
      attack: "atk",
      defense: "def",
      "special-attack": "satk",
      "special-defense": "sdef",
      speed: "spd",
    }[stat]);

  React.useEffect(() => {
    axios.get(pokemon.species.url).then(({ data }) => {
      const englishFlavorTextObj = data.flavor_text_entries.find(
        ({ language }) => language.name === "en"
      );

      if (englishFlavorTextObj) {
        setFlavorText(englishFlavorTextObj.flavor_text);
        return;
      }

      setFlavorText(data.flavor_text_entries[0].flavor_text);
    });
  }, [pokemon.species.url]);

  return (
    <Background
      mode={mode}
      pokemonType={pokemonType}
      style={{ position: "relative" }}
    >
      <S.MainContainer>
        <Header />
        <S.DetailsContainer mode={mode}>
          <S.SectionHeader>
            {isFavorite ? (
              <S.Button>
                <FavoriteIcon
                  onClick={removeFromFavorites}
                  isFavorite={isFavorite}
                />
              </S.Button>
            ) : (
              <S.Button>
                <FavoriteIcon
                  onClick={addToFavorites}
                  isFavorite={isFavorite}
                />
              </S.Button>
            )}
            <S.PokemonName pokemonType={pokemonType}>
              {pokemon.name}
            </S.PokemonName>
            <S.PokemonId pokemonType={pokemonType}>
              #{getThreeDigitNumber(pokemon.id)}
            </S.PokemonId>
          </S.SectionHeader>

          {pokemon.types.map(({ type }) => (
            <S.PokemonTypeTag key={type.name} pokemonType={type.name}>
              {type.name}
            </S.PokemonTypeTag>
          ))}

          <S.PokemonTraitList mode={mode}>
            <TraitListItem fadedText="weight">
              <WeightIcon mode={mode} /> {pokemon.weight / 10} kg
            </TraitListItem>
            <TraitListItem fadedText="height">
              <HeightIcon mode={mode} /> {pokemon.height / 10} m
            </TraitListItem>
            <TraitListItem fadedText="moves">
              {getFormattedMoves(pokemon)}
            </TraitListItem>
          </S.PokemonTraitList>

          <S.PokemonFlavorText pokemonType={pokemonType} mode={mode}>
            {flavorText}
          </S.PokemonFlavorText>

          <S.BaseStatsTitle pokemonType={pokemonType}>
            Base Stats
          </S.BaseStatsTitle>
          <ul>
            {pokemon.stats.map((item) => (
              <S.BaseStatItem key={item.stat.name}>
                <S.BaseStatName pokemonType={pokemonType}>
                  {abbreviateStatName(item.stat.name)}
                </S.BaseStatName>
                <S.BaseStatValue mode={mode}>
                  {getThreeDigitNumber(item.base_stat)}
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
            <S.BackLink to={previousPage ? previousPage : "/"}>
              <BackArrow /> Voltar
            </S.BackLink>
            <S.SecondaryTitle>About</S.SecondaryTitle>
          </S.AboutWrapper>
          <S.PokemonPicWrapper>
            <S.PokemonPic
              src={getSvgAddress(pokemon.id)}
              alt={`Foto do/da ${pokemon.name}`}
            />
          </S.PokemonPicWrapper>
        </S.PokemonPicContainer>
      </S.MainContainer>
    </Background>
  );
};

export default About;
