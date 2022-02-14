import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import api from "../../services/api";

const Search = () => {
  const [searchedPokemon, setSearchedPokemon] = React.useState("");
  const [searchResult, setSearchResult] = React.useState("");
  const [pokemonFeed, setPokemonFeed] = React.useState(null);

  async function updatePokemonFeed(
    url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=2"
  ) {
    const { data } = await axios.get(url);
    const ids = data.results.map(({ url }) =>
      url.replace("https://pokeapi.co/api/v2/pokemon/", "")
    );
    const responses = await Promise.all(ids.map((id) => api.get(id)));
    const result = responses.map(({ data }) => data);
    setPokemonFeed((pokemonFeed) =>
      pokemonFeed
        ? {
            pokemon: [...pokemonFeed.pokemon, ...result],
            data,
          }
        : { pokemon: result, data }
    );
  }

  function loadMorePokemon() {
    if (pokemonFeed.data.next) updatePokemonFeed(pokemonFeed.data.next);
  }

  React.useEffect(() => {
    updatePokemonFeed();
  }, []);

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
            {pokemonFeed.pokemon.map((pokemon) => (
              <Card key={pokemon.id} {...pokemon} />
            ))}
          </div>
          <button onClick={loadMorePokemon}>Carregar mais</button>
        </div>
      )}
    </>
  );
};

export default Search;
