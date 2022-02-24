import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GET_POKEMON_FEED_DATA,
  GET_POKEMON_LIST,
} from "../../store/slices/PokemonFeedSlice";
import Card from "../Card";
import Loading from "../Loading";
import PokemonListContainer from "../PokemonListContainer";

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
  }, [dispatch, pokemonList.length]);

  return (
    <>
      {pokemonFeedData.length > 0 && (
        <PokemonListContainer>
          {pokemonFeedData.map((pokemon) => (
            <Card key={pokemon.id} {...pokemon} />
          ))}
        </PokemonListContainer>
      )}
      <div ref={pageBottom} style={{ height: "100px" }}></div>
      {isLoading && <Loading mode={currentMode} />}
      {error && <h1>Deu ruim</h1>}
    </>
  );
};

export default PokemonFeed;
