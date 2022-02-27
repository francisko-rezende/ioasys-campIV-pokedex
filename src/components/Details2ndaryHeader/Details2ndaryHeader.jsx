import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_FAVORITE_POKEMON,
  REMOVE_FAVORITE_POKEMON,
} from "../../store/slices/favoritePokemonSlice";
import * as hooks from "../../hooks";
import * as S from "./Details2ndaryHeader.style";
import * as helpers from "../../helpers";
import FavoriteIcon from "../FavoriteIcon";

const Details2ndaryHeader = ({ pokemon, pokemonType }) => {
  const [isFavorite, setIsFavorite] = React.useState(false);
  const store = useSelector((store) => store);
  const { favoritePokemonList } = store.favoritePokemon;

  const dispatch = useDispatch();

  hooks.useSyncFavoriteState(setIsFavorite, favoritePokemonList, pokemon);

  const addToFavorites = () => {
    dispatch(ADD_FAVORITE_POKEMON(pokemon));
  };
  const removeFromFavorites = () => {
    dispatch(REMOVE_FAVORITE_POKEMON(pokemon));
  };

  hooks.useSyncFavoriteState(setIsFavorite, favoritePokemonList, pokemon);

  return (
    <S.Header>
      <S.Button>
        <FavoriteIcon
          removeFromFavorites={removeFromFavorites}
          addToFavorites={addToFavorites}
          isFavorite={isFavorite}
        />
      </S.Button>
      <S.PokemonName pokemonType={pokemonType}>{pokemon.name}</S.PokemonName>
      <S.PokemonId pokemonType={pokemonType}>
        #{helpers.convertToThreeDigitNumber(pokemon.id)}
      </S.PokemonId>
    </S.Header>
  );
};

export default Details2ndaryHeader;
