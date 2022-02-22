import React from "react";
import { useSelector } from "react-redux";
import Card from "../../components/Card";
import Background from "../../components/Background";
import Error from "../../components/Error";
import Header from "../../components/Header/Header";
import PokemonFeed from "../../components/PokemonFeed";
import SearchBar from "../../components/SearchBar";
import api from "../../services/api";
import Container from "../../components/Container";
import PokemonListContainer from "../../components/PokemonListContainer";
import * as S from "./Search.style.js";

const Search = () => {
  const [searchedPokemon, setSearchedPokemon] = React.useState("");
  const [searchResult, setSearchResult] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  function handlePokemonSearch(e) {
    e.preventDefault();

    setSearchResult("");
    setIsLoading(true);

    if (!searchedPokemon) {
      setIsLoading(false);
      return;
    }

    api
      .get(`${searchedPokemon}`)
      .then(({ data }) => {
        setSearchResult(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }

  const { mode } = useSelector(({ mode }) => mode);

  return (
    <Background mode={mode}>
      <Container>
        <Header />
        <SearchBar
          setSearchedPokemon={setSearchedPokemon}
          handlePokemonSearch={handlePokemonSearch}
          searchedPokemon={searchedPokemon}
          mode={mode}
          setError={setError}
          setSearchResult={setSearchResult}
        />
        {isLoading && <h1>Loading...</h1>}
        {searchResult && (
          <S.SearchResultContainer>
            <PokemonListContainer>
              <Card {...searchResult} />
            </PokemonListContainer>
          </S.SearchResultContainer>
        )}
        {error && (
          <S.SearchResultContainer>
            <Error />
          </S.SearchResultContainer>
        )}
        <PokemonFeed />
      </Container>
    </Background>
  );
};

export default Search;
