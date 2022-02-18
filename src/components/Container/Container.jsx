import React from "react";
import * as S from "./Container.style";

const Container = ({ children, mode, pokemonType }) => {
  return (
    <S.Container mode={mode} pokemonType={pokemonType}>
      {children}
    </S.Container>
  );
};

export default Container;
