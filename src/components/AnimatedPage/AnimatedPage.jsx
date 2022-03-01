import React from "react";

import PropTypes from "prop-types";

import * as S from "./AnimatedPage.style";

const AnimatedPage = ({ children }) => {
  return <S.Div>{children}</S.Div>;
};

AnimatedPage.propTypes = {
  children: PropTypes.array,
};

export default AnimatedPage;
