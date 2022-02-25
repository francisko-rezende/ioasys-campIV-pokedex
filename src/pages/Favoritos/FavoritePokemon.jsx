import React from "react";
import { useSelector } from "react-redux";
import Card from "../../components/Card";
import Background from "../../components/Background";
import FavoriteIcon from "../../components/FavoriteIcon";
import Header from "../../components/Header/Header";
import Container from "../../components/Container";
import PokemonListContainer from "../../components/PokemonListContainer";
import Head from "../../components/Head";

import * as S from "./FavoritePokemon.style";
import AnimatedPage from "../../components/AnimatedPage";

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
          <S.SecondaryHeaderWrapper mode={currentMode}>
            <S.Link to="/">
              <S.BackArrow /> Voltar
            </S.Link>
            <S.H2>
              <FavoriteIcon isFavorite /> Meus favoritos
            </S.H2>
          </S.SecondaryHeaderWrapper>
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
