import React from "react";

const useSyncFavoriteState = (setIsFavorite, favoritePokemonList, pokemon) => {
  React.useEffect(() => {
    const isInFavList = favoritePokemonList.some(
      ({ name }) => name === pokemon.name
    );

    setIsFavorite(isInFavList);
  }, [favoritePokemonList, pokemon.name, setIsFavorite]);
};

export default useSyncFavoriteState;
