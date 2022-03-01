import React from "react";

import * as S from "./TraitListItem.style";

const TraitListItem = ({ children, traitName }) => {
  return (
    <S.Item>
      <S.TraitName>{traitName}</S.TraitName>
      {children}
    </S.Item>
  );
};

export default TraitListItem;
