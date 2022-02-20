import React from "react";
import * as S from "./Error.style";

const Error = () => {
  return (
    <S.Wrapper>
      <S.ErrorText>
        Este pokemon não foi <br></br>encontrado ;(
      </S.ErrorText>
    </S.Wrapper>
  );
};

export default Error;
