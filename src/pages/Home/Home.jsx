import React from "react";
import { useSelector } from "react-redux";
import Card from "../../components/Card";
import Background from "../../components/Background";
import Error from "../../components/Error";
import Header from "../../components/Header/Header";
import PokemonFeed from "../../components/PokemonFeed";
import SearchBar from "../../components/SearchBar";
import api from "../../services/api";
import Container from "../../components/Container";
import PokemonListContainer from "../../components/PokemonListContainer";
import * as S from "./Home.style.js";
import Loading from "../../components/Loading";
import Head from "../../components/Head";
import AnimatedPage from "../../components/AnimatedPage";
import MyFavoritesLink from "../../components/MyFavoritesLink";
import SearchResult from "../../components/SearchResult";

const Search = () => {
  const [searchedPokemon, setSearchedPokemon] = React.useState("");
  const [searchResult, setSearchResult] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

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

  const { currentMode } = useSelector(({ mode }) => mode);

  return (
    <Background mode={currentMode}>
      <AnimatedPage>
        <Head
          title="PokéFeed"
          description="Home da sua Pokédex. Aqui você pode dar uma olhada nos Pokémon existentes e procurar por Pokémon específicos."
        />
        <Container>
          <Header />
          <S.Wrapper>
            <SearchBar
              setSearchedPokemon={setSearchedPokemon}
              handlePokemonSearch={handlePokemonSearch}
              searchedPokemon={searchedPokemon}
              mode={currentMode}
              setError={setError}
              setSearchResult={setSearchResult}
            />
            <MyFavoritesLink />
          </S.Wrapper>
          <SearchResult
            isLoading={isLoading}
            searchResult={searchResult}
            error={error}
          />
          <PokemonFeed />
        </Container>
      </AnimatedPage>
    </Background>
  );
};

export default Search;
