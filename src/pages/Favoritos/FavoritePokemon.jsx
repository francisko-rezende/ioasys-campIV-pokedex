import axios from "axios";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Card from "../../components/Card";
import Container from "../../components/Container";
import Header from "../../components/Header/Header";
import { GET_FAVORITE_POKEMON } from "../../store/slices/favoritePokemonSlice";

const FavoritePokemon = () => {
  // const favorites = JSON.parse(window.localStorage.getItem("favoritePokemon"));

  const dispatch = useDispatch();
  const { mode } = useSelector(({ mode }) => mode);
  const {
    favoritePokemon: { favoritePokemonList },
  } = useSelector((store) => store);

  function generatePlaceholderCards() {
    const numberOfCardsToCreate = 12 - favoritePokemonList.length;
    const placeholderCardsArray = Array(numberOfCardsToCreate).fill();
    return placeholderCardsArray.map((_, index) => (
      <Blank key={index} mode={mode} />
    ));
  }

  const handleClick = () => {
    dispatch(GET_FAVORITE_POKEMON());
  };

  return (
    <Container mode={mode}>
      <Header />
      <h1>Meus pokemon favoritos</h1>
      <Link to="/">Voltar</Link>
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
      <button onClick={handleClick}>SEEEEEEEEYA</button>
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

export default FavoritePokemon;
