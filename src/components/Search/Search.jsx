import React from "react";
import MyFavoritesLink from "../MyFavoritesLink";
import SearchBar from "../SearchBar";
import SearchResult from "../SearchResult";
import * as S from "./Search.style";

const Search = () => {
  const [searchResult, setSearchResult] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  return (
    <>
      <S.Wrapper>
        <SearchBar
          setSearchResult={setSearchResult}
          setIsLoading={setIsLoading}
          setError={setError}
        />
        <MyFavoritesLink />
      </S.Wrapper>
      <SearchResult
        searchResult={searchResult}
        isLoading={isLoading}
        error={error}
      />
    </>
  );
};

export default Search;
