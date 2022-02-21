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

  // const isFavorite = () =>
  //   favoritePokemonList.some(({ name }) => name === pokemon.name);

  function getFormattedMoves() {
    if (pokemon.abilities.length > 1) {
      return pokemon.abilities
        .slice(0, 2)
        .map(({ ability }) => ability.name)
        .join(" / ");
    }
    return pokemon.abilities[0].ability.name;
  }

  const pokemonType = pokemon.types[0].type.name;
  const [flavorText, setFlavorText] = React.useState("");

  const getSvgBaseAddress = (id) =>
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
    <Background mode={mode} pokemonType={pokemonType}>
      <Header />
      <h1>Detalhes</h1>
      {isFavorite ? (
        <Button>
          <FavoriteIcon onClick={removeFromFavorites} isFavorite={isFavorite} />
        </Button>
      ) : (
        <button>
          <FavoriteIcon onClick={addToFavorites} isFavorite={isFavorite} />
        </button>
      )}

      <ImgContainer pokemonType={pokemonType}>
        <Link to={previousPage}>Voltar</Link>
        About
        <img
          src={getSvgBaseAddress(pokemon.id)}
          alt={`Foto do/da ${pokemon.name}`}
        />
      </ImgContainer>
      <PokemonName pokemonType={pokemonType}>{pokemon.name}</PokemonName>
      <PokemonId pokemonType={pokemonType}>{formatId(pokemon.id)}</PokemonId>
      <hr></hr>

      {pokemon.types.map(({ type }) => (
        <PokemonTypeTag key={type.name} pokemonType={type.name}>
          {type.name}
        </PokemonTypeTag>
      ))}

      <hr />
      <PokemonTraitList mode={mode}>
        <li>height: {pokemon.height / 10} m</li>
        <li>weight: {pokemon.weight / 10} kg</li>
        <li>moves: {getFormattedMoves()}</li>
      </PokemonTraitList>
      <hr />
      <PokemonFlavorText pokemonType={pokemonType} mode={mode}>
        {flavorText}
      </PokemonFlavorText>
      <hr />
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
          <li
            key={item.stat.name}
            style={{
              display: "grid",
              alignItems: "center",
              gridTemplateColumns: "1fr auto auto",
            }}
          >
            <BaseStatName pokemonType={pokemonType}>
              {item.stat.name}
            </BaseStatName>
            <BaseStatValue mode={mode}>{item.base_stat}</BaseStatValue>{" "}
            <Wrapper
              role="progressbar"
              aria-valuenow={item.base_stat}
              aria-valuemin="0"
              aria-valuemax="255"
              pokemonType={pokemonType}
            >
              <Bar pokemonType={pokemonType} value={item.base_stat} />
            </Wrapper>
          </li>
        ))}
      </ul>
    </Background>
  );
};

const Wrapper = styled.div`
  background-color: ${({ theme, pokemonType }) =>
    theme.colors.pokemonTypes[`${pokemonType}Bg`]};
  width: 300px;
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
  top: 1px;
`;

const PokemonName = styled.h2`
  text-transform: capitalize;
  color: ${({ theme, pokemonType }) => theme.colors.pokemonTypes[pokemonType]};
`;

const PokemonId = styled.span`
  color: ${({ theme, pokemonType }) => theme.colors.pokemonTypes[pokemonType]};
`;

const ImgContainer = styled.div`
  background-color: ${({ theme, pokemonType }) =>
    theme.colors.pokemonTypes[pokemonType]};
  width: 408px;
  height: 538px;
`;

const PokemonTypeTag = styled.span`
  text-transform: capitalize;
  display: inline-block;
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
`;

const BaseStatsTitle = styled.h2`
  color: ${({ theme, pokemonType }) => theme.colors.pokemonTypes[pokemonType]};
`;

const PokemonFlavorText = styled.p`
  color: ${({ theme, mode }) => theme[mode].textMain};
`;

const BaseStatName = styled.span`
  text-transform: uppercase;
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
  color: ${({ theme, pokemonType }) => theme.colors.pokemonTypes[pokemonType]};
`;

const BaseStatValue = styled.span`
  color: ${({ theme, mode }) => theme[mode].textMain};
`;

const Button = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
`;

export default About;
