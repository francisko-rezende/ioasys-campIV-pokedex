import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
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
    const intersectionObserver = new IntersectionObserver(
      ([pageBottomEntry]) => {
        // const [pageBottomEntry] = entries;
        if (!pageBottomEntry.isIntersecting) return;
        dispatch(GET_POKEMON_LIST());

        // entries.forEach((entry) => {
        //   if (!entry.isIntersecting) {
        //     return;
        //   }
        //   dispatch(GET_POKEMON_LIST());
        // });
      }
    );

    intersectionObserver.observe(pageBottom.current);

    return () => intersectionObserver.disconnect();
  }, [dispatch]);

  React.useEffect(() => {
    const isThereAPokemonList = pokemonList.length > 0;

    if (isThereAPokemonList) {
      Promise.all(pokemonList.map((name) => api.get(name))).then(
        (newResponses) => {
          const getData = ({ data }) => data;

          const pokemonFeedData = newResponses.map(getData);
          dispatch(UPDATE_POKEMON_FEED_DATA(pokemonFeedData));
        }
      );
    }
  }, [dispatch, pokemonList.length]);

  return (
    <>
      {pokemonFeedData && (
        <PokemonListContainer>
          {pokemonFeedData.map((pokemon) => (
            <Card key={pokemon.id} {...pokemon} />
          ))}
        </PokemonListContainer>
      )}
      <div ref={pageBottom} style={{ height: "50px" }}></div>
    </>
  );
};

export default PokemonFeed;
