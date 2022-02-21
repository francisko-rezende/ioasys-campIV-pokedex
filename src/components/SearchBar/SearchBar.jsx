import React from "react";

const SearchBar = ({
  setSearchedPokemon,
  handlePokemonSearch,
  searchedPokemon,
}) => {
  return (
    <form>
      <input
        onChange={(e) => setSearchedPokemon(e.target.value)}
        value={searchedPokemon}
      ></input>
      <button type="submit" onClick={handlePokemonSearch}>
        Buscar
      </button>
    </form>
  );
};

export default SearchBar;
