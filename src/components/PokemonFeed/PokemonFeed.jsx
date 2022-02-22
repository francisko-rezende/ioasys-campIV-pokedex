import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components";
import api from "../../services/api";
import {
  GET_POKEMON_LIST,
  UPDATE_POKEMON_FEED_DATA,
} from "../../store/slices/PokemonFeedSlice";
import Card from "../Card";
import PokemonListContainer from "../PokemonListContainer";

const PokemonFeed = () => {
  const { pokemonList, pokemonFeedData } = useSelector(
    ({ pokemonFeed }) => pokemonFeed
  );
  const dispatch = useDispatch();
  const pageBottom = React.useRef();

  React.useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      const [pageBottomEntry] = entries;
      if (!pageBottomEntry.isIntersecting) return;
      dispatch(GET_POKEMON_LIST());

      // entries.forEach((entry) => {
      //   if (!entry.isIntersecting) {
      //     return;
      //   }
      //   dispatch(GET_POKEMON_LIST());
      // });
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
  }, [dispatch, pokemonList]);

  return (
    <>
      {pokemonFeedData && (
        <PokemonListContainer>
          {pokemonFeedData.map((pokemon) => (
            <Card key={pokemon.id} {...pokemon} />
          ))}
        </PokemonListContainer>
      )}
      <div ref={pageBottom} style={{ height: "50px" }}>
        a
      </div>
    </>
  );
};

export default PokemonFeed;
