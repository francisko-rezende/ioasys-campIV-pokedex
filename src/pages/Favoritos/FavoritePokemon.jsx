import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Card from "../../components/Card";

const FavoritePokemon = () => {
  const favorites = JSON.parse(window.localStorage.getItem("favoritePokemon"));

  function generatePlaceholderCards() {
    const numberOfCardsToCreate = 12 - favorites.length;
    const placeholderCardsArray = Array(numberOfCardsToCreate).fill(
      <Blank themeVariant="light" />
    );
    return placeholderCardsArray.map((blank) => blank);
  }

  generatePlaceholderCards();

  return (
    <>
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
    </>
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
  background-color: #f2f4f7;
`;

export default FavoritePokemon;
