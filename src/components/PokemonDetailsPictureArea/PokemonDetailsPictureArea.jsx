import React from "react";
import { ReactComponent as BackArrow } from "../../assets/icons/back-svgomg.svg";
import * as S from "./PokemonDetailsPictureArea.style";
import * as helpers from "../../helpers";
import { useLocation } from "react-router-dom";

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

export default PokemonDetailsPictureArea;
