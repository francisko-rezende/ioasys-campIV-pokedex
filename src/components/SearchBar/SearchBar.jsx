import React from "react";
import * as S from "./SearchBar.style";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-svgomg.svg";
import api from "../../services/api";
import { useSelector } from "react-redux";

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
        setError(null);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }

  const resetSearchAndError = () => {
    setError(null);
    setSearchResult(null);
    setSearchedPokemon("");
  };

  const { currentMode } = useSelector(({ mode }) => mode);

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
          onKeyUp={() => {
            if (searchedPokemon === "") {
              setError(null);
              setSearchResult(null);
            }
          }}
          value={searchedPokemon}
          type="text"
          id="pokemonSearch"
        ></S.Input>
        <div>
          {searchedPokemon ? (
            <S.ClearSearchIcon onClick={resetSearchAndError} />
          ) : (
            <SearchIcon />
          )}
        </div>
      </S.Form>
    </>
  );
};

export default SearchBar;
