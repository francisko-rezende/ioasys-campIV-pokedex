import React from "react";

import FavoriteIcon from "../FavoriteIcon";
import * as S from "./MyFavoritesLink.style";

const MyFavoritesLink = () => {
  return (
    <S.FavLink to="/favoritos">
      <FavoriteIcon isFavorite /> <S.FavLinkText>Meus favoritos</S.FavLinkText>
    </S.FavLink>
  );
};

export default MyFavoritesLink;
