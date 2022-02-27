import React from "react";
import { useSelector } from "react-redux";
import FavoriteIcon from "../FavoriteIcon";
import * as S from "./MyFavorites2ndHeader.style";

const MyFavorites2ndHeader = () => {
  const { currentMode } = useSelector(({ mode }) => mode);

  return (
    <S.SecondaryHeaderWrapper mode={currentMode}>
      <S.Link to="/">
        <S.BackArrow /> Voltar
      </S.Link>
      <S.H2>
        <FavoriteIcon isFavorite /> Meus favoritos
      </S.H2>
    </S.SecondaryHeaderWrapper>
  );
};

export default MyFavorites2ndHeader;
