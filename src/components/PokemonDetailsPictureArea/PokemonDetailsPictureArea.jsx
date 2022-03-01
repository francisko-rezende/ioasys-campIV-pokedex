import React from "react";

import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

import { ReactComponent as BackArrow } from "../../assets/icons/back-svgomg.svg";
import * as helpers from "../../helpers";
import * as S from "./PokemonDetailsPictureArea.style";

const PokemonDetailsPictureArea = ({ pokemonType, pokemon }) => {
  const location = useLocation();
  const previousPage = helpers.getPreviousPageAddress(location);

  return (
    <>
      <S.PokemonPicContainer pokemonType={pokemonType}>
        <S.AboutWrapper>
          <S.BackLink to={previousPage}>
            <BackArrow /> Voltar
          </S.BackLink>
          <S.SecondaryTitle>About</S.SecondaryTitle>
        </S.AboutWrapper>
        <S.PokemonPicWrapper>
          <S.PokemonPic
            src={helpers.getSvgAddress(pokemon.id)}
            alt={`Foto do/da ${pokemon.name}`}
          />
        </S.PokemonPicWrapper>
      </S.PokemonPicContainer>
    </>
  );
};

PokemonDetailsPictureArea.propTypes = {
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

export default PokemonDetailsPictureArea;
