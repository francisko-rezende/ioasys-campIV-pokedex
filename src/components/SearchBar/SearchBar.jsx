import React from "react";
import * as S from "./SearchBar.style";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-svgomg.svg";
import FavoriteIcon from "../FavoriteIcon";

const SearchBar = ({
  setSearchedPokemon,
  handlePokemonSearch,
  searchedPokemon,
  mode,
}) => {
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
          placeholder="bulbasaur"
        ></S.Input>
        {searchedPokemon ? (
          <S.ClearSearchIcon onClick={() => setSearchedPokemon("")} />
        ) : (
          <SearchIcon />
        )}
      </S.Form>
      <S.FavLink to="/favoritos">
        <FavoriteIcon isFavorite={true} />{" "}
        <S.FavLinkText>Meus favotiros</S.FavLinkText>
      </S.FavLink>
    </S.Wrapper>
  );
};

export default SearchBar;
