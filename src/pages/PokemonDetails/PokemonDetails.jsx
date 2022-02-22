import axios from "axios";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import {
  ADD_FAVORITE_POKEMON,
  REMOVE_FAVORITE_POKEMON,
} from "../../store/slices/favoritePokemonSlice";
import Background from "../../components/Background";
import FavoriteIcon from "../../components/FavoriteIcon";
import Header from "../../components/Header/Header";
import { Container } from "../../components/Container/Container.style";
import pokeballBg from "../../assets/icons/pokeball-bg-svgomg.svg";
import TraitListItem from "../../components/TraitListItem";
import HeightIcon from "../../components/HeightIcon/HeightIcon";
import WeightIcon from "../../components/WeightIcon";
import { ReactComponent as BackArrow } from "../../assets/icons/back-svgomg.svg";

// todo create About.styles.js and put styled components there
// todo style it

const About = () => {
  const location = useLocation();
  const { pokemon } = location.state;
  const previousPage = location.pathname.split("/").slice(0, -1).join("/");

  const {
    mode: { mode },
    favoritePokemon: { favoritePokemonList },
  } = useSelector((store) => store);

  React.useEffect(() => {
    window.localStorage.setItem(
      "favoritePokemon",
      JSON.stringify(favoritePokemonList)
    );
  }, [favoritePokemonList]);

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

  const formatId = (id) => {
    const idLength = String(id).length;

    switch (idLength) {
      case 1:
        return `#00${id}`;
      case 2:
        return `#0${id}`;
      default:
        return `#${id}`;
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
      <Container>
        <Header />
        <DetailsContainer mode={mode}>
          <SectionHeader>
            {isFavorite ? (
              <Button>
                <FavoriteIcon
                  onClick={removeFromFavorites}
                  isFavorite={isFavorite}
                />
              </Button>
            ) : (
              <Button>
                <FavoriteIcon
                  onClick={addToFavorites}
                  isFavorite={isFavorite}
                />
              </Button>
            )}
            <PokemonName pokemonType={pokemonType}>{pokemon.name}</PokemonName>
            <PokemonId pokemonType={pokemonType}>
              {formatId(pokemon.id)}
            </PokemonId>
          </SectionHeader>

          {pokemon.types.map(({ type }) => (
            <PokemonTypeTag key={type.name} pokemonType={type.name}>
              {type.name}
            </PokemonTypeTag>
          ))}

          <PokemonTraitList mode={mode}>
            <TraitListItem fadedText="weight">
              <WeightIcon mode={mode} /> {pokemon.weight / 10} kg
            </TraitListItem>
            <TraitListItem fadedText="height">
              <HeightIcon mode={mode} /> {pokemon.height / 10} m
            </TraitListItem>
            <TraitListItem fadedText="moves">
              {getFormattedMoves(pokemon)}
            </TraitListItem>
          </PokemonTraitList>

          <PokemonFlavorText pokemonType={pokemonType} mode={mode}>
            {flavorText}
          </PokemonFlavorText>

          <BaseStatsTitle pokemonType={pokemonType}>Base Stats</BaseStatsTitle>
          <ul>
            {/* <li style={{ display: "flex", alignItems: "center" }}>
              hp: 45{" "}
              <Wrapper
                role="progressbar"
                aria-valuenow="45"
                aria-valuemin="0"
                aria-valuemax="255"
                pokemonType={pokemonType}
              >
                <Bar pokemonType={pokemonType} value={45} />
              </Wrapper>
            </li>
            <li>
              Total pra calcular o tamanho das barras: 245. Eg: 45 / 245 * 300 = 55
            </li> */}
            {pokemon.stats.map((item) => (
              <BaseStatItem key={item.stat.name}>
                <BaseStatName pokemonType={pokemonType}>
                  {abbreviateStatName(item.stat.name)}
                </BaseStatName>
                <BaseStatValue mode={mode}>{item.base_stat}</BaseStatValue>{" "}
                <BarWrapper
                  role="progressbar"
                  aria-valuenow={item.base_stat}
                  aria-valuemin="0"
                  aria-valuemax="255"
                  pokemonType={pokemonType}
                >
                  <Bar pokemonType={pokemonType} value={item.base_stat} />
                </BarWrapper>
              </BaseStatItem>
            ))}
          </ul>
        </DetailsContainer>
        <PokemonPicContainer pokemonType={pokemonType}>
          <AboutWrapper>
            <BackLink to={previousPage}>
              <BackArrow /> Voltar
            </BackLink>
            <SecondaryTitle>About</SecondaryTitle>
          </AboutWrapper>
          <PokemonPicWrapper>
            <PokemonPic
              src={getSvgAddress(pokemon.id)}
              alt={`Foto do/da ${pokemon.name}`}
            />
          </PokemonPicWrapper>
        </PokemonPicContainer>
      </Container>
    </Background>
  );
};

const BarWrapper = styled.div`
  background-color: ${({ theme, pokemonType }) =>
    theme.colors.pokemonTypes[`${pokemonType}Bg`]};
  width: calc(100% - 1rem);
  height: 6px;
  position: relative;
  top: 1px;
  margin-left: 1rem;
`;

const Bar = styled.div`
  width: ${({ value }) => (value / 245) * 300}px;
  height: 6px;
  background-color: ${({ theme, pokemonType }) =>
    theme.colors.pokemonTypes[pokemonType]};
  position: relative;
`;

const SectionHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 25px;

  @media (max-width: 1270px) {
    position: absolute;
    top: -170px;
    /* left: -5px; */
    width: 360px;
    display: grid;
    grid-template-columns: repeat(2, auto) 1fr;
    justify-content: start;
  }
`;

const PokemonName = styled.h2`
  text-transform: capitalize;
  color: ${({ theme, pokemonType }) => theme.colors.pokemonTypes[pokemonType]};

  @media (max-width: 1270px) {
    color: ${({ theme }) => theme.colors.grayscale.white};
  }
`;

const PokemonId = styled.span`
  color: ${({ theme, pokemonType }) => theme.colors.pokemonTypes[pokemonType]};
  font-weight: 700;
  font-size: 12px;
  line-height: 2.5;
  align-self: flex-end;
  margin-left: 15px;

  @media (max-width: 1270px) {
    color: ${({ theme }) => theme.colors.grayscale.white};
    justify-self: end;
  }
`;

const PokemonTypeTag = styled.span`
  text-transform: capitalize;
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 35px;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  padding: 2px 8px;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.grayscale.white};
  background-color: ${({ theme, pokemonType }) =>
    theme.colors.pokemonTypes[pokemonType]};
`;

const PokemonTraitList = styled.ul`
  color: ${({ theme, mode }) => theme[mode].textMain};
  margin-bottom: 56px;
  display: flex;
  justify-content: space-between;
  /* gap: 50px; */
`;

const BaseStatsTitle = styled.h3`
  color: ${({ theme, pokemonType }) => theme.colors.pokemonTypes[pokemonType]};
  margin-bottom: 20px;
`;

const PokemonFlavorText = styled.p`
  color: ${({ theme, mode }) => theme[mode].textMain};
  font-size: 14px;
  margin-bottom: 30px;
`;

const BaseStatName = styled.span`
  text-transform: uppercase;
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
  color: ${({ theme, pokemonType }) => theme.colors.pokemonTypes[pokemonType]};
  position: relative;
`;

const BaseStatValue = styled.span`
  color: ${({ theme, mode }) => theme[mode].textMain};
`;

const Button = styled.button`
  cursor: pointer;
  background-color: transparent;
  height: fit-content;
  border: none;
  display: flex;
`;

const PokemonPicContainer = styled.div`
  background-color: ${({ theme, pokemonType }) =>
    theme.colors.pokemonTypes[pokemonType]};
  width: 408px;
  height: calc(583px - 15px);
  position: absolute;
  bottom: 0px;
  left: 0;

  @media (max-width: 1270px) {
    width: 100%;
    height: 100%;
  }
`;

const PokemonPicWrapper = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  top: 75px;

  &::before {
    content: "";
    background-image: url(${pokeballBg});
    background-size: cover;
    display: inline-block;
    position: absolute;
    width: 310px;
    height: 310px;
    left: 0;
    top: 0px;
    transform: translateX(-50px);
  }

  @media (max-width: 1270px) {
    width: 200px;
    height: 200px;
    z-index: 3;
    margin: auto;

    &::before {
      content: "";
      background-image: url(${pokeballBg});
      background-size: cover;
      display: inline-block;
      position: absolute;
      width: 180px;
      height: 180px;
      left: 0px;
      top: -70px;
      transform: translateX(150px);
      transform: translateX(50px);
    }
  }
`;

const PokemonPic = styled.img`
  position: relative;
  z-index: 1;
  max-width: 100%;
  height: 80%;
  display: block;
  object-fit: cover;
  transform: translateX(100px);

  @media (max-width: 1270px) {
    transform: unset;
  }
`;

const DetailsContainer = styled.section`
  max-width: 440px;
  position: relative;
  z-index: 3;
  margin: 0 auto;
  background-color: ${({ theme, mode }) => theme[mode].pageBg};

  @media (max-width: 1270px) {
    border-radius: 15px;
    padding: 80px 40px 70px 40px;
    max-width: calc(440px + 80px);
  }

  @media (max-width: calc(520px + 14px)) {
    margin: 0 7px;
  }
`;

const BaseStatItem = styled.li`
  display: grid;
  align-items: center;
  grid-template-columns: 70px auto 1fr;
  position: relative;

  &::before {
    position: absolute;
    display: block;
    content: "";
    height: 100%;
    border-right: 1px solid ${({ theme }) => theme.colors.grayscale.lightGray};
    top: 0;
    left: 54px;
  }
`;

const SecondaryTitle = styled.h2`
  font-weight: 700;
  font-size: 18px;
  line-height: 1;
  color: #ffffff;

  @media (max-width: 1270px) {
    display: none;
  }
`;

const AboutWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 17px 28px;
  gap: 86px;

  @media (max-width: 1270px) {
    position: absolute;
    bottom: 8%;
    margin: auto;
    right: 42%;
  }
`;

const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.grayscale.white};
  gap: 12px;
`;

export default About;
