import { Link } from "react-router-dom";
import styled from "styled-components";
import pokeballBg from "../../assets/icons/pokeball-bg-svgomg.svg";
import { default as HeaderComponent } from "../../components/Header/Header";

export const Header = styled(HeaderComponent)`
  @media (max-width: 1380px) {
    display: none;
  }
`;

export const BarWrapper = styled.div`
  background-color: ${({ theme, pokemonType }) =>
    theme.colors.pokemonTypes[`${pokemonType}Bg`]};
  width: 100%;
  height: 6px;
  position: relative;
  top: 1px;
`;

export const Bar = styled.div`
  width: ${({ value }) => (value / 245) * 300}px;
  height: 6px;
  background-color: ${({ theme, pokemonType }) =>
    theme.colors.pokemonTypes[pokemonType]};
  position: relative;
`;

export const BaseStatsTitle = styled.h3`
  color: ${({ theme, pokemonType }) => theme.colors.pokemonTypes[pokemonType]};
  margin-bottom: 20px;
`;

export const PokemonFlavorText = styled.p`
  color: ${({ theme, mode }) => theme[mode].textMain};
  font-size: 14px;
  margin-bottom: 30px;
`;

export const BaseStatName = styled.span`
  text-transform: uppercase;
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
  color: ${({ theme, pokemonType }) => theme.colors.pokemonTypes[pokemonType]};
  position: relative;
`;

export const BaseStatValue = styled.span`
  color: ${({ theme, mode }) => theme[mode].textMain};
`;

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

export const DetailsContainer = styled.section`
  max-width: 440px;
  position: relative;
  z-index: 3;
  margin: 0 auto;
  background-color: ${({ theme, mode }) => theme[mode].pageBg};

  @media (max-width: 1380px) {
    margin-top: 163px;
    border-radius: 15px;
    padding: 80px 40px 70px 40px;
    max-width: calc(440px + 80px);
  }

  @media (max-width: calc(520px + 14px)) {
    padding-left: 32px;
    padding-right: 32px;
  }
`;

export const BaseStatItem = styled.li`
  display: grid;
  align-items: center;
  grid-template-columns: 70px 48px 1fr;
  position: relative;

  &::before {
    position: absolute;
    display: block;
    content: "";
    height: 100%;
    border-right: 1px solid ${({ theme }) => theme.colors.grayscale.lightGray};
    top: 0;
    left: 54px;
  }
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

export const MainContainer = styled.main`
  max-width: calc(830px + 14px);
  padding: 0 7px;
  margin: 0 auto;
`;
