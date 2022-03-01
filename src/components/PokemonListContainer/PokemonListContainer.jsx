import React from "react";

import * as S from "./PokemonListContainer.style.js";

const PokemonListContainer = ({ children }) => {
  return <S.Container>{children}</S.Container>;
};

export default PokemonListContainer;
