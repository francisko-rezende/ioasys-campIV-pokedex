import React from "react";

import PropTypes from "prop-types";

import * as S from "./Background.style";

const Background = ({ children, mode, pokemonType }) => {
  return (
    <S.Background mode={mode} pokemonType={pokemonType}>
      {children}
    </S.Background>
  );
};

Background.propTypes = {
  children: PropTypes.element,
  pokemonType: PropTypes.string,
  mode: PropTypes.string,
};

export default Background;
