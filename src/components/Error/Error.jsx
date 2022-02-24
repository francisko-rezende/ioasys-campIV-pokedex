import React from "react";
import * as S from "./Error.style";

const Error = ({ errorMessage }) => {
  const getErrorMessageToRender = (errorMessage) =>
    ({
      "Request failed with status code 404":
        "Este pokemon não foi encontrado ;(",
      "Network Error": "Sua conexão tá com problema ;(",
    }[errorMessage] || "Ocorreu um erro, tente de novo depois ;(");

  console.log(errorMessage);

  return (
    <S.Wrapper>
      <S.ErrorText>
        Ops
        <S.MainMessage>{getErrorMessageToRender(errorMessage)}</S.MainMessage>
      </S.ErrorText>
    </S.Wrapper>
  );
};

//Este pokemon não foi encontrado ;(

export default Error;
