import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import api from "../../services/api";

const Search = () => {
  const [searchedPokemon, setSearchedPokemon] = React.useState("");
  const [searchResult, setSearchResult] = React.useState("");
  const [pokemonList, setPokemonList] = React.useState("");
  const [endpoint, setEndpoint] = React.useState(1);
  const [pokemonFeed, setPokemonFeed] = React.useState(null);

  async function getInfiniteScrollData(
    endpoint = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=15"
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
        console.log(newResponses);
        setPokemonFeed(newResponses.map(({ data }) => data));
      }
    }

    getPokemonData();
  }, [pokemonList]);

  function loadMorePokemon() {
    if (endpoint) getInfiniteScrollData(endpoint);
  }

  async function handlePokemonSearch(e) {
    e.preventDefault();

    const { data } = await api.get(`${searchedPokemon}`);
    setSearchResult(data);
  }

  return (
    <>
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
      {searchResult && (
        <div>
          <h1>Resultado da busca</h1>
          <Card {...searchResult} />
        </div>
      )}
      {pokemonFeed && (
        <div>
          <h1>Pokémon</h1>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            {pokemonFeed.map((pokemon) => (
              <Card key={pokemon.id} {...pokemon} />
            ))}
          </div>
          <div id="end"></div>
          <button onClick={loadMorePokemon}>Carregar mais</button>
        </div>
      )}
    </>
  );
};

export default Search;
