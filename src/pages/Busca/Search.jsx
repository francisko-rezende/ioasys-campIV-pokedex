import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import Container from "../../components/Container";
import Error from "../../components/Error";
import Header from "../../components/Header/Header";
import PokemonFeed from "../../components/PokemonFeed";
import api from "../../services/api";

const Search = () => {
  const [searchedPokemon, setSearchedPokemon] = React.useState("");
  const [searchResult, setSearchResult] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  function handlePokemonSearch(e) {
    e.preventDefault();

    setSearchResult("");
    setIsLoading(true);

    if (!searchedPokemon) {
      setIsLoading(false);
      return;
    }

    api
      .get(`${searchedPokemon}`)
      .then(({ data }) => {
        setSearchResult(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }

  const { mode } = useSelector(({ mode }) => mode);

  return (
    <Container mode={mode}>
      <Header />
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
      {isLoading && <h1>Loading...</h1>}
      {searchResult && (
        <div>
          <h1>Resultado da busca</h1>
          <Card {...searchResult} />
        </div>
      )}
      {error && <Error />}

      <PokemonFeed />
    </Container>
  );
};

export default Search;
