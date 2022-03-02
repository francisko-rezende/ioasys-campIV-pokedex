import React from "react";

import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import * as helpers from "../../helpers";
import * as hooks from "../../hooks";
import {
  ADD_FAVORITE_POKEMON,
  REMOVE_FAVORITE_POKEMON,
} from "../../store/slices/favoritePokemonSlice";
import FavoriteIcon from "../FavoriteIcon";
import * as S from "./PokemonDetailsHeader.style";

const PokemonDetailsHeader = ({ pokemon, pokemonType }) => {
  const [isFavorite, setIsFavorite] = React.useState(false);
  const store = useSelector((store) => store);
  const { favoritePokemonList } = store.favoritePokemon;

  const dispatch = useDispatch();

  hooks.useSyncFavoriteState(setIsFavorite, favoritePokemonList, pokemon);

  hooks.useSaveInLocalStorage("favoritePokemon", favoritePokemonList);

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

PokemonDetailsHeader.propTypes = {
  pokemonType: PropTypes.string,
  pokemon: PropTypes.shape({
    abilities: PropTypes.array,
    base_experience: PropTypes.number,
    forms: PropTypes.array,
    game_indices: PropTypes.array,
    height: PropTypes.number,
    held_items: PropTypes.array,
    id: PropTypes.number,
    is_default: PropTypes.bool,
    location_area_encounters: PropTypes.string,
    moves: PropTypes.array,
    name: PropTypes.string,
    order: PropTypes.number,
    past_types: PropTypes.array,
    species: PropTypes.object,
    sprites: PropTypes.object,
    stats: PropTypes.array,
    types: PropTypes.array,
    weight: PropTypes.number,
  }),
};

export default PokemonDetailsHeader;
