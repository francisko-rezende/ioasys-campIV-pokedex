import React from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import api from "../../services/api";

const Search = () => {
  const [searchedPokemon, setSearchedPokemon] = React.useState("");
  const [searchResult, setSearchResult] = React.useState("");

  async function handlePokemonSearch(e) {
    e.preventDefault();

    const { data } = await api.get(`pokemon/${searchedPokemon}`);
    console.log(data);
    setSearchResult(data);
  }

  return (
    <>
      <h1>Essa é a página de busca</h1>
      <Link to="/">Voltar</Link>
      <form>
        <input
          onChange={(e) => setSearchedPokemon(e.target.value)}
          value={searchedPokemon}
        ></input>
        <button type="submit" onClick={handlePokemonSearch}>
          Buscar
        </button>
      </form>
      {searchResult && <Card {...searchResult} />}
    </>
  );
};

export default Search;
