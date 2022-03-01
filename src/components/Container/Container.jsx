import React from "react";

import PropTypes from "prop-types";

import * as S from "./Container.style";

const Container = ({ children }) => {
  return <S.Container>{children}</S.Container>;
};

Container.propTypes = {
  children: PropTypes.array,
};

export default Container;
