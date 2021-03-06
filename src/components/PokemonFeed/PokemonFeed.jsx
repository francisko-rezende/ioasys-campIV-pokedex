import React from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  GET_POKEMON_FEED_DATA,
  GET_POKEMON_LIST,
} from "../../store/slices/PokemonFeedSlice";
import Card from "../Card";
import Error from "../Error/Error";
import Loading from "../Loading";
import PokemonListContainer from "../PokemonListContainer";
import * as S from "./PokemonFeed.style";

const PokemonFeed = () => {
  const { pokemonList, pokemonFeedData, error, isLoading } = useSelector(
    ({ pokemonFeed }) => pokemonFeed
  );
  const { currentMode } = useSelector(({ mode }) => mode);
  const dispatch = useDispatch();
  const pageBottom = React.useRef();

  React.useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      ([pageBottomEntry]) => {
        if (!pageBottomEntry.isIntersecting) return;
        dispatch(GET_POKEMON_LIST());
      }
    );

    intersectionObserver.observe(pageBottom.current);

    return () => intersectionObserver.disconnect();
  }, [dispatch]);

  React.useEffect(() => {
    const isThereAPokemonList = pokemonList.length > 0;

    if (isThereAPokemonList) {
      dispatch(GET_POKEMON_FEED_DATA(pokemonList));
    }
  }, [dispatch, pokemonList]);

  return (
    <>
      {pokemonFeedData.length > 0 && (
        <PokemonListContainer>
          {pokemonFeedData.map((pokemon) => (
            <Card key={pokemon.id} {...pokemon} />
          ))}
        </PokemonListContainer>
      )}
      <S.PageBottom ref={pageBottom}>
        {isLoading && <Loading mode={currentMode} />}
      </S.PageBottom>
      {error && <Error errorMessage={error.message} isOnFeed />}
    </>
  );
};

export default PokemonFeed;
