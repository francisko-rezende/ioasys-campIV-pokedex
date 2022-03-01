import React from "react";

import { useSelector } from "react-redux";

import AnimatedPage from "../../components/AnimatedPage";
import Background from "../../components/Background";
import Card from "../../components/Card";
import Container from "../../components/Container";
import Head from "../../components/Head";
import Header from "../../components/Header/Header";
import MyFavorites2ndHeader from "../../components/MyFavorites2ndHeader";
import PokemonListContainer from "../../components/PokemonListContainer";
import * as S from "./FavoritePokemon.style";

const FavoritePokemon = () => {
  const {
    mode: { currentMode },
    favoritePokemon: { favoritePokemonList },
  } = useSelector((store) => store);

  const generatePlaceholderCards = (favoritePokemonList) => {
    const numberOfCardsToCreate = 12 - favoritePokemonList.length;
    const placeholderCardsArray = Array(numberOfCardsToCreate).fill();

    return placeholderCardsArray.map((_, index) => (
      <S.PlaceholderCard key={index} mode={currentMode} />
    ));
  };

  return (
    <Background mode={currentMode}>
      <AnimatedPage>
        <Head
          title="Favoritos"
          description="Pokémon favoritos. Aqui você encontra os Pokémon que você mais gosta."
        />
        <Container>
          <Header />
          <MyFavorites2ndHeader />
          <PokemonListContainer>
            {favoritePokemonList &&
              favoritePokemonList.map((pokemon) => (
                <Card key={pokemon.name} {...pokemon} />
              ))}
            {generatePlaceholderCards(favoritePokemonList)}
          </PokemonListContainer>
        </Container>
      </AnimatedPage>
    </Background>
  );
};

export default FavoritePokemon;
