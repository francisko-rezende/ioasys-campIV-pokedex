import { Link } from "react-router-dom";
import styled from "styled-components";
import pokeballBg from "../../assets/icons/pokeball-bg-svgomg.svg";

export const PokemonPicContainer = styled.div`
  background-color: ${({ theme, pokemonType }) =>
    theme.colors.pokemonTypes[pokemonType]};
  width: 408px;
  height: calc(583px - 15px);
  position: absolute;
  bottom: 0px;
  left: 0;

  @media (max-width: 1380px) {
    width: 100%;
    height: 100%;
  }
`;

export const AboutWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 17px 28px;
  gap: 86px;

  @media (max-width: 1380px) {
    position: absolute;
    bottom: 8%;
    margin: auto;
    right: 42%;
  }
`;

export const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.grayscale.white};
  gap: 12px;
`;

export const SecondaryTitle = styled.h2`
  font-weight: 700;
  font-size: 18px;
  line-height: 1;
  color: #ffffff;

  @media (max-width: 1380px) {
    display: none;
  }
`;

export const PokemonPicWrapper = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  top: 0px;

  &::before {
    content: "";
    background-image: url(${pokeballBg});
    background-size: cover;
    display: inline-block;
    position: absolute;
    width: 377px;
    height: 377px;
    left: 0;
    top: 0px;
    transform: translateX(-50px);
  }

  @media (max-width: 1380px) {
    top: 70px;
    width: 200px;
    height: 200px;
    z-index: 3;
    margin: auto;

    &::before {
      content: "";
      background-image: url(${pokeballBg});
      background-size: cover;
      display: inline-block;
      position: absolute;
      width: 180px;
      height: 180px;
      left: 0px;
      top: -70px;
      transform: translateX(100px);
    }
  }
`;

export const PokemonPic = styled.img`
  position: relative;
  z-index: 1;
  max-width: 100%;
  height: 90%;
  display: block;
  transform: translateX(100px);

  @media (max-width: 1380px) {
    height: 80%;

    transform: unset;
    margin: 0 auto;
  }
`;
