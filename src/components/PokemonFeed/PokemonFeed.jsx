import axios from "axios";
import React from "react";
import api from "../../services/api";
import Card from "../Card";

const PokemonFeed = () => {
  const [pokemonList, setPokemonList] = React.useState("");
  const [endpoint, setEndpoint] = React.useState("");
  const [pokemonFeed, setPokemonFeed] = React.useState(null);

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
    <div>
      {pokemonFeed && (
        <div>
          <h1>Pokémon</h1>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            {pokemonFeed.map((pokemon) => (
              <Card key={pokemon.id} {...pokemon} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PokemonFeed;
