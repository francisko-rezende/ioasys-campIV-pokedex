import React from "react";

import * as S from "./Background.style";

const Background = ({ children, mode, pokemonType }) => {
  return (
    <S.Background mode={mode} pokemonType={pokemonType}>
      {children}
    </S.Background>
  );
};

export default Background;
