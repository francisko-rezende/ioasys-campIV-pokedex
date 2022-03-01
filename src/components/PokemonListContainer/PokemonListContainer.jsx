import React from "react";

import PropTypes from "prop-types";

import * as S from "./PokemonListContainer.style.js";

const PokemonListContainer = ({ children }) => {
  return <S.Container>{children}</S.Container>;
};

PokemonListContainer.propTypes = {
  children: PropTypes.array,
};

export default PokemonListContainer;
