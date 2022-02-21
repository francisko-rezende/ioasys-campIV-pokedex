import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Card from "../../components/Card";
import Background from "../../components/Background";
import FavoriteIcon from "../../components/FavoriteIcon";
import Header from "../../components/Header/Header";
import { ReactComponent as BackArrow } from "../../assets/icons/back-svgomg.svg";

const FavoritePokemon = () => {
  const {
    mode: { mode },
    favoritePokemon: { favoritePokemonList },
  } = useSelector((store) => store);

  function generatePlaceholderCards() {
    const numberOfCardsToCreate = 12 - favoritePokemonList.length;
    const placeholderCardsArray = Array(numberOfCardsToCreate).fill();
    return placeholderCardsArray.map((_, index) => (
      <Blank key={index} mode={mode} />
    ));
  }

  return (
    <Background mode={mode}>
      <Wrapper>
        <Header />
        <Spacer mode={mode}>
          <StyledLink to="/">
            <StyledBackArrow /> Voltar
          </StyledLink>
          <StyledSubTitle>
            <FavoriteIcon isFavorite={true} /> Meus favotiros
          </StyledSubTitle>
        </Spacer>
        <Grid>
          {favoritePokemonList ? (
            favoritePokemonList.map((pokemon) => (
              <Card key={pokemon.name} {...pokemon} />
            ))
          ) : (
            <p>Você ainda não tem favoritos</p>
          )}
          {generatePlaceholderCards()}
        </Grid>
      </Wrapper>
    </Background>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  max-width: 830px;
  margin: 0 auto;
`;

const Blank = styled.div`
  width: 152px;
  height: 150px;
  border-radius: 10.49px;
  background-color: ${({ theme, mode }) => theme[mode].placeholderCardBg};
`;

const Wrapper = styled.main`
  max-width: 830px;
  margin: 0 auto;
`;

const Spacer = styled.div`
  padding: 60px 0;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  border-top: 2px solid
    ${({ theme, mode }) => theme[mode].favoritesHorizontalSeparator};
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.agnostic.back};
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  padding: 1rem;
  padding-left: 0;
`;

const StyledBackArrow = styled(BackArrow)`
  margin-right: 13px;
`;

const StyledSubTitle = styled.h2`
  display: flex;
  font-size: 18px;
  gap: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.ioasysColor.secondaryColor};
  justify-self: center;
  transform: translateX(-53px);
`;

export default FavoritePokemon;
