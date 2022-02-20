import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Card from "../../components/Card";
import Container from "../../components/Container";
import Error from "../../components/Error";
import Header from "../../components/Header/Header";
import api from "../../services/api";

const Search = () => {
  const [searchedPokemon, setSearchedPokemon] = React.useState("");
  const [searchResult, setSearchResult] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  function handlePokemonSearch(e) {
    e.preventDefault();
    setSearchResult("");
    setIsLoading(true);

    if (!searchedPokemon) {
      setIsLoading(false);
      return;
    }

    api
      .get(`${searchedPokemon}`)
      .then(({ data }) => {
        setSearchResult(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((error) => {
        console.log(error.code);
        setError(error);
        setIsLoading(false);
      });
  }

  const [pokemonList, setPokemonList] = React.useState("");
  const [endpoint, setEndpoint] = React.useState(1);
  const [pokemonFeed, setPokemonFeed] = React.useState(null);

  const { mode } = useSelector(({ mode }) => mode);

  async function getInfiniteScrollData(
    endpoint = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20"
  ) {
    const { next, results } = (await axios.get(endpoint)).data;
    setEndpoint(next);

    const pokemonNames = results.map(({ name }) => name);

    setPokemonList((currentPokemon) =>
      Array.from(new Set([...currentPokemon, ...pokemonNames]))
    );
  }

  React.useEffect(() => {
    getInfiniteScrollData();
  }, []);

  React.useEffect(() => {
    async function getPokemonData() {
      if (pokemonList) {
        const newResponses = await Promise.all(
          pokemonList.map((name) => api.get(name))
        );
        setPokemonFeed(newResponses.map(({ data }) => data));
      }
    }

    getPokemonData();
  }, [pokemonList]);

  React.useEffect(() => {
    let wait = false;
    function infiniteScroll() {
      if (endpoint) {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;

        if (scroll > height * 0.95 && !wait) {
          wait = true;
          getInfiniteScrollData(endpoint);
          setTimeout(() => (wait = false), 1000);
        }
      }
    }

    window.addEventListener("wheel", infiniteScroll);
    window.addEventListener("scroll", infiniteScroll);

    return () => {
      window.removeEventListener("wheel", infiniteScroll);
      window.removeEventListener("scroll", infiniteScroll);
    };
  });

  return (
    <Container mode={mode}>
      <Header />
      <h1>Essa é a página de busca</h1>
      <Link to="/">Voltar</Link>
      <form>
        <input
          onChange={(e) => setSearchedPokemon(e.target.value)}
          value={searchedPokemon}
        ></input>
        <button type="submit" onClick={handlePokemonSearch}>
          Buscar
        </button>
      </form>
      {isLoading && <h1>Loading...</h1>}
      {searchResult && (
        <div>
          <h1>Resultado da busca</h1>
          <Card {...searchResult} />
        </div>
      )}
      {error && <Error />}
      {/* {pokemonFeed && (
        <div>
          <h1>Pokémon</h1>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            {pokemonFeed.map((pokemon) => (
              <Card key={pokemon.id} {...pokemon} />
            ))}
          </div>
        </div>
      )} */}
    </Container>
  );
};

// const Container = styled.main`
//   background-color: ${({ theme, mode }) => theme[mode].pageBg};
// `;

export default Search;
