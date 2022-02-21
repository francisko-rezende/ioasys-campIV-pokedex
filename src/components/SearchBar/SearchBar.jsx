import React from "react";
import * as S from "./SearchBar.style";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-svgomg.svg";

const SearchBar = ({
  setSearchedPokemon,
  handlePokemonSearch,
  searchedPokemon,
  mode,
}) => {
  console.log(mode);
  return (
    <S.Form onSubmit={handlePokemonSearch}>
      <S.Label htmlFor="pokemonSearch" mode={mode}>
        Buscar
      </S.Label>
      <S.Input
        onChange={(e) => setSearchedPokemon(e.target.value)}
        value={searchedPokemon}
        type="text"
        id="pokemonSearch"
        placeholder="bulbasaur"
      ></S.Input>
      <SearchIcon />
    </S.Form>
  );
};

export default SearchBar;
