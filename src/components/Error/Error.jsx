import React from "react";

import * as S from "./Error.style";

const Error = ({ errorMessage, isOnFeed }) => {
  const getErrorMessageToRender = (errorMessage) => {
    console.log(errorMessage);

    return (
      {
        "Request failed with status code 404": isOnFeed
          ? "Ocorreu um erro ao carregar o feed, tente de novo depois ;("
          : "Este pokemon não foi encontrado ;(",
        "Network Error": "Sua conexão tá com problema ;(",
      }[errorMessage] || "Ocorreu um erro, tente de novo depois ;("
    );
  };

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
