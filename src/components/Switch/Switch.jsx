import React from "react";
import * as S from "./Switch.style";

const Switch = ({ onClick, mode }) => {
  console.log(mode);

  return (
    <S.Switch onClick={onClick} mode={mode}>
      <S.Thumb mode={mode} />
    </S.Switch>
  );
};

export default Switch;
