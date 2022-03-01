import React from "react";

import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import { ReactComponent as SearchIcon } from "../../assets/icons/search-svgomg.svg";
import api from "../../services/api";
import * as S from "./SearchBar.style";

const SearchBar = ({ setSearchResult, setError, setIsLoading }) => {
  const [searchedPokemon, setSearchedPokemon] = React.useState("");

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
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }

  const clearSearchInputAndResult = () => {
    setError(null);
    setSearchResult(null);
    setSearchedPokemon("");
  };

  const clearSearchResultIfNoInput = () => {
    if (searchedPokemon === "") {
      setError(null);
      setSearchResult(null);
    }
  };

  const { currentMode } = useSelector(({ mode }) => mode);

  SearchBar.propTypes = {
    setSearchResult: PropTypes.func,
    setError: PropTypes.func,
    setIsLoading: PropTypes.func,
  };

  return (
    <>
      <S.Form onSubmit={handlePokemonSearch}>
        <S.Label htmlFor="pokemonSearch" mode={currentMode}>
          Buscar
        </S.Label>
        <S.Input
          onChange={(e) => {
            setSearchedPokemon(e.target.value);
          }}
          onKeyUp={clearSearchResultIfNoInput}
          value={searchedPokemon}
          type="text"
          id="pokemonSearch"
        ></S.Input>
        <div>
          {searchedPokemon ? (
            <S.ClearSearchIcon onClick={clearSearchInputAndResult} />
          ) : (
            <SearchIcon />
          )}
        </div>
      </S.Form>
    </>
  );
};

export default SearchBar;
