import React from "react";

import PropTypes from "prop-types";

import * as S from "./TraitListItem.style";

const TraitListItem = ({ children, traitName }) => {
  return (
    <S.Item>
      <S.TraitName>{traitName}</S.TraitName>
      {children}
    </S.Item>
  );
};

TraitListItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  traitName: PropTypes.string,
};

export default TraitListItem;
