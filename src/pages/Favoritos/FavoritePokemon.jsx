import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Card from "../../components/Card";
import Header from "../../components/Header/Header";

const FavoritePokemon = () => {
  const favorites = JSON.parse(window.localStorage.getItem("favoritePokemon"));

  const { mode } = useSelector(({ mode }) => mode);

  function generatePlaceholderCards() {
    const numberOfCardsToCreate = 12 - favorites.length;
    const placeholderCardsArray = Array(numberOfCardsToCreate).fill();
    return placeholderCardsArray.map((_, index) => (
      <Blank key={index} mode={mode} />
    ));
  }

  return (
    <Container mode={mode}>
      <Header />
      <h1>Meus pokemon favoritos</h1>
      <Link to="/">Voltar</Link>
      <Grid>
        {favorites ? (
          favorites.map((pokemon) => <Card key={pokemon.name} {...pokemon} />)
        ) : (
          <p>Você ainda não tem favoritos</p>
        )}
        {generatePlaceholderCards()}
      </Grid>
    </Container>
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
  background-color: ${({ theme, mode }) => theme[mode].cardBg};
`;

const Container = styled.main`
  background-color: ${({ theme, mode }) => theme[mode].pageBg};
`;

export default FavoritePokemon;
