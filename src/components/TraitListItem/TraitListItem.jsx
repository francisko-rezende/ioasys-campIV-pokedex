import React from "react";
import * as S from "./TraitListItem.style";

const TraitListItem = ({ children, fadedText }) => {
  return <S.Item fadedText={fadedText}>{children}</S.Item>;
};

export default TraitListItem;
