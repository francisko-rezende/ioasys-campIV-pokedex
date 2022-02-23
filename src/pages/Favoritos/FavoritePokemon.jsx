import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Card from "../../components/Card";
import Background from "../../components/Background";
import FavoriteIcon from "../../components/FavoriteIcon";
import Header from "../../components/Header/Header";
import { ReactComponent as BackArrow } from "../../assets/icons/back-svgomg.svg";
import Container from "../../components/Container";
import PokemonListContainer from "../../components/PokemonListContainer";

const FavoritePokemon = () => {
  const {
    mode: { mode },
    favoritePokemon: { favoritePokemonList },
  } = useSelector((store) => store);

  function generatePlaceholderCards(favoritePokemonList) {
    const numberOfCardsToCreate = 12 - favoritePokemonList.length;
    const placeholderCardsArray = Array(numberOfCardsToCreate).fill();
    return placeholderCardsArray.map((_, index) => (
      <PlaceholderCard key={index} mode={mode} />
    ));
  }

  return (
    <Background mode={mode}>
      <Container>
        <Header />
        <SecondaryHeaderWrapper mode={mode}>
          <StyledLink to="/">
            <StyledBackArrow /> Voltar
          </StyledLink>
          <StyledSecondaryHeader>
            <FavoriteIcon isFavorite={true} /> Meus favotiros
          </StyledSecondaryHeader>
        </SecondaryHeaderWrapper>
        <PokemonListContainer>
          {favoritePokemonList ? (
            favoritePokemonList.map((pokemon) => (
              <Card key={pokemon.name} {...pokemon} />
            ))
          ) : (
            <p>Você ainda não tem favoritos</p>
          )}
          {generatePlaceholderCards(favoritePokemonList)}
        </PokemonListContainer>
      </Container>
    </Background>
  );
};

const PlaceholderCard = styled.div`
  width: 152px;
  height: 150px;
  border-radius: 10.49px;
  background-color: ${({ theme, mode }) => theme[mode].placeholderCardBg};

  @media (max-width: 565px) {
    width: 104px;
    height: 112px;
  }
`;

const SecondaryHeaderWrapper = styled.div`
  padding: 60px 0;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  border-top: 2px solid
    ${({ theme, mode }) => theme[mode].favoritesHorizontalSeparator};

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    border: unset;
    padding-top: 0;
  }
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.agnostic.back};
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  padding: 1rem;
  padding-left: 0;

  @media (max-width: 500px) {
    position: absolute;
    bottom: 6%;
    left: 45%;
    flex-direction: column;
    align-items: center;
  }
`;

const StyledBackArrow = styled(BackArrow)`
  margin-right: 13px;

  @media (max-width: 500px) {
    margin: unset;
    margin-bottom: 5px;
  }
`;

const StyledSecondaryHeader = styled.h2`
  display: flex;
  font-size: 18px;
  gap: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.ioasysColor.secondaryColor};
  justify-self: center;
  transform: translateX(-53px);

  @media (max-width: 500px) {
    transform: unset;
  }
`;

export default FavoritePokemon;
