import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import api from "../../services/api";
import { GET_POKEMON_LIST } from "../../store/slices/PokemonFeedSlice";
import Card from "../Card";

const PokemonFeed = () => {
  const [pokemonFeed, setPokemonFeed] = React.useState(null);
  const { pokemonList } = useSelector(({ pokemonFeed }) => pokemonFeed);
  const dispatch = useDispatch();
  const pageBottom = React.useRef();

  React.useEffect(() => {
    const intersectionObersever = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        dispatch(GET_POKEMON_LIST());
      });
    });

    intersectionObersever.observe(pageBottom.current);

    return () => intersectionObersever.disconnect();
  }, [dispatch]);

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

  return (
    <div>
      {pokemonFeed && (
        <div>
          <h1>Pokémon</h1>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
              gap: "20px",
              maxWidth: "836px",
            }}
          >
            {pokemonFeed.map((pokemon) => (
              <Card key={pokemon.id} {...pokemon} />
            ))}
          </div>
        </div>
      )}
      <div
        style={{
          width: "100vw",
          heigth: "10px",
          background: "red",
        }}
        ref={pageBottom}
      >
        a
      </div>
    </div>
  );
};

export default PokemonFeed;
