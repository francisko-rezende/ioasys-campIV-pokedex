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
import Loading from "../../components/Loading";

const Search = () => {
  const [searchedPokemon, setSearchedPokemon] = React.useState("");
  const [searchResult, setSearchResult] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  function handlePokemonSearch(e) {
    e.preventDefault();

    setSearchResult("");
    setError(null);
    setIsLoading(true);

    if (!searchedPokemon) {
      setIsLoading(false);
      return;
    }

    api
      .get(`/pokemon/${searchedPokemon}`)
      .then(({ data }) => {
        setSearchResult(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }

  const { currentMode } = useSelector(({ mode }) => mode);

  return (
    <Background mode={currentMode}>
      <Container>
        <Header />
        <SearchBar
          setSearchedPokemon={setSearchedPokemon}
          handlePokemonSearch={handlePokemonSearch}
          searchedPokemon={searchedPokemon}
          mode={currentMode}
          setError={setError}
          setSearchResult={setSearchResult}
        />
        {isLoading && <Loading mode={currentMode} />}
        {searchResult && (
          <S.SearchResultContainer>
            <PokemonListContainer>
              <Card {...searchResult} />
            </PokemonListContainer>
          </S.SearchResultContainer>
        )}
        {error && (
          <S.SearchResultContainer>
            <Error errorMessage={error} />
          </S.SearchResultContainer>
        )}
        <PokemonFeed />
      </Container>
    </Background>
  );
};

export default Search;
