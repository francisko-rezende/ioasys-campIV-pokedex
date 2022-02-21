import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import api from "../../services/api";
import {
  GET_POKEMON_LIST,
  UPDATE_POKEMON_FEED_DATA,
} from "../../store/slices/PokemonFeedSlice";
import Card from "../Card";

const PokemonFeed = () => {
  const { pokemonList, pokemonFeedData } = useSelector(
    ({ pokemonFeed }) => pokemonFeed
  );
  const dispatch = useDispatch();
  const pageBottom = React.useRef();

  React.useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        dispatch(GET_POKEMON_LIST());
      });
    });

    intersectionObserver.observe(pageBottom.current);

    return () => intersectionObserver.disconnect();
  }, [dispatch]);

  React.useEffect(() => {
    if (pokemonList) {
      Promise.all(pokemonList.map((name) => api.get(name))).then(
        (newResponses) => {
          const destructureData = ({ data }) => data;
          const pokemonFeedData = newResponses.map(destructureData);

          dispatch(UPDATE_POKEMON_FEED_DATA(pokemonFeedData));
        }
      );
    }
  }, [pokemonList]);

  return (
    <div>
      {pokemonFeedData && (
        <div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
              gap: "20px",
              maxWidth: "836px",
            }}
          >
            {pokemonFeedData.map((pokemon) => (
              <Card key={pokemon.id} {...pokemon} />
            ))}
          </div>
        </div>
      )}
      <div
        style={{
          width: "calc(100vw - 15px)",
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
