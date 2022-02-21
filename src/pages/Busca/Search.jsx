import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import Background from "../../components/Background";
import Error from "../../components/Error";
import Header from "../../components/Header/Header";
import PokemonFeed from "../../components/PokemonFeed";
import SearchBar from "../../components/SearchBar";
import api from "../../services/api";
import Container from "../../components/Container";

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
    <Background mode={mode}>
      <Container>
        <Header />

        <Link to="/">Voltar</Link>
        <SearchBar
          setSearchedPokemon={setSearchedPokemon}
          handlePokemonSearch={handlePokemonSearch}
          searchedPokemon={searchedPokemon}
          mode={mode}
        />
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
    </Background>
  );
};

export default Search;
