import React from "react";
import { useSelector } from "react-redux";
import api from "../../services/api";
import MyFavoritesLink from "../MyFavoritesLink";
import SearchBar from "../SearchBar";
import SearchResult from "../SearchResult";
import * as S from "./Search.style";

const Search = () => {
  const [searchedPokemon, setSearchedPokemon] = React.useState("");
  const [searchResult, setSearchResult] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  function handlePokemonSearch(e) {
    e.preventDefault();

    setSearchResult(null);
    setError(null);
    setIsLoading(true);

    if (!searchedPokemon) {
      return;
    }

    api
      .get(`/pokemon/${searchedPokemon}`)
      .then(({ data }) => {
        setSearchResult(data);
        setError(null);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }

  const { currentMode } = useSelector(({ mode }) => mode);

  return (
    <>
      <S.Wrapper>
        <SearchBar
          setSearchedPokemon={setSearchedPokemon}
          handlePokemonSearch={handlePokemonSearch}
          searchedPokemon={searchedPokemon}
          mode={currentMode}
          setError={setError}
          setSearchResult={setSearchResult}
        />
        <MyFavoritesLink />
      </S.Wrapper>
      <SearchResult
        isLoading={isLoading}
        searchResult={searchResult}
        error={error}
      />
    </>
  );
};

export default Search;
