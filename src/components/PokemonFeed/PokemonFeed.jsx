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
      }
    );

    intersectionObserver.observe(pageBottom.current);

    return () => intersectionObserver.disconnect();
  }, [dispatch]);

  const [isLoadingFeed, setIsLoadingFeed] = React.useState(false);
  const [errorFeed, setErrorFeed] = React.useState(null);

  React.useEffect(() => {
    const isThereAPokemonList = pokemonList.length > 0;

    if (isThereAPokemonList) {
      setIsLoadingFeed(true);
      setErrorFeed(null);
      Promise.all(pokemonList.map((name) => api.get(`/pokemo/${name}`)))
        .then((newResponses) => {
          console.log(newResponses);
          const getData = ({ data }) => data;

          const pokemonFeedData = newResponses.map(getData);
          dispatch(UPDATE_POKEMON_FEED_DATA(pokemonFeedData));
          setIsLoadingFeed(null);
        })
        .catch((err) => {
          setIsLoadingFeed(false);
          setErrorFeed(err);
        });
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
      {isLoadingFeed && <h1 style={{ color: "red" }}>loading...</h1>}
      {errorFeed && <h1>Deu ruim</h1>}
      <div ref={pageBottom} style={{ height: "50px" }}></div>
    </>
  );
};

export default PokemonFeed;
