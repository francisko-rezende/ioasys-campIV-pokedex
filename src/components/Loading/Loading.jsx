import React from "react";

import * as S from "./Loading.style";

const Loading = ({ mode }) => {
  return (
    <S.PokeballContainer>
      <S.Pokeball>
        <S.PokeballButton></S.PokeballButton>
      </S.Pokeball>
      <S.LoadingText mode={mode}>Carregando...</S.LoadingText>
    </S.PokeballContainer>
  );
};

export default Loading;
