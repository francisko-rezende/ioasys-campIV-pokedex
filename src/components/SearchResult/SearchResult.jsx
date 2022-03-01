import React from "react";

import PropTypes from "prop-types";
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

SearchResult.propTypes = {
  isLoading: PropTypes.bool,
  searchResult: PropTypes.shape({
    abilities: PropTypes.array,
    base_experience: PropTypes.number,
    forms: PropTypes.array,
    game_indices: PropTypes.array,
    height: PropTypes.number,
    held_items: PropTypes.array,
    id: PropTypes.number,
    is_default: PropTypes.bool,
    location_area_encounters: PropTypes.string,
    moves: PropTypes.array,
    name: PropTypes.string,
    order: PropTypes.number,
    past_types: PropTypes.array,
    species: PropTypes.object,
    sprites: PropTypes.object,
    stats: PropTypes.array,
    types: PropTypes.array,
    weight: PropTypes.number,
  }),
  error: PropTypes.string,
};

export default SearchResult;
