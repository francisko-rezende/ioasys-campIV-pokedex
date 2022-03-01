import React from "react";

import { useSelector } from "react-redux";

import Card from "../Card";
import Error from "../Error";
import Loading from "../Loading";
import PokemonListContainer from "../PokemonListContainer";
import * as S from "./SearchResult.style";

const SearchResult = ({ isLoading, searchResult, error }) => {
  const { currentMode } = useSelector(({ mode }) => mode);

  if (isLoading) {
    return (
      <S.SearchResultContainer>
        <Loading mode={currentMode} />
      </S.SearchResultContainer>
    );
  }

  if (searchResult) {
    return (
      <S.SearchResultContainer>
        <PokemonListContainer>
          <Card {...searchResult} />
        </PokemonListContainer>
      </S.SearchResultContainer>
    );
  }

  if (error) {
    return (
      <S.SearchResultContainer>
        <Error errorMessage={error} />
      </S.SearchResultContainer>
    );
  }

  return null;
};

export default SearchResult;
