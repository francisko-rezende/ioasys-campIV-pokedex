import React from "react";

import ProptTypes from "prop-types";

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

Loading.propTypes = {
  mode: ProptTypes.string,
};

export default Loading;
