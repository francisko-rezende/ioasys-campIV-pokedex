import React from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card";

const Search = () => {
  const [pokemon, setPokemon] = React.useState("");
  const [data, setData] = React.useState("");

  async function handlePokemonSearch(e) {
    e.preventDefault();

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}/`
    );
    const data = await response.json();
    setData(data);
  }

  return (
    <>
      <h1>Essa é a página de busca</h1>
      <Link to="/">Voltar</Link>
      <form>
        <input
          onChange={(e) => setPokemon(e.target.value)}
          value={pokemon}
        ></input>
        <button type="submit" onClick={handlePokemonSearch}>
          Buscar
        </button>
      </form>
      {data && <Card {...data} />}
    </>
  );
};

export default Search;
