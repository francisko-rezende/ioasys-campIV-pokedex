import React from "react";

import PropTypes from "prop-types";

import * as S from "./Switch.style";

const Switch = ({ onClick, mode }) => {
  return (
    <S.Switch onClick={onClick} mode={mode}>
      <S.Thumb mode={mode} />
    </S.Switch>
  );
};

Switch.propTypes = {
  onClick: PropTypes.func,
  mode: PropTypes.oneOf(["darkMode", "lightMode"]),
};

export default Switch;
