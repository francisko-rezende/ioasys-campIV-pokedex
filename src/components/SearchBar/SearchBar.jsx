import React from "react";
import * as S from "./SearchBar.style";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-svgomg.svg";
import FavoriteIcon from "../FavoriteIcon";

const SearchBar = ({
  setSearchedPokemon,
  handlePokemonSearch,
  searchedPokemon,
  mode,
  setError,
  setSearchResult,
}) => {
  const resetSearchAndError = () => {
    setError(null);
    setSearchResult(null);
    setSearchedPokemon("");
  };

  return (
    <S.Wrapper>
      <S.Form onSubmit={handlePokemonSearch}>
        <S.Label htmlFor="pokemonSearch" mode={mode}>
          Buscar
        </S.Label>
        <S.Input
          onChange={(e) => setSearchedPokemon(e.target.value)}
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
      <S.FavLink to="/favoritos">
        <FavoriteIcon isFavorite={true} />{" "}
        <S.FavLinkText>Meus favotiros</S.FavLinkText>
      </S.FavLink>
    </S.Wrapper>
  );
};

export default SearchBar;
