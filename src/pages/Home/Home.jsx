import React from "react";
import { useSelector } from "react-redux";
import Background from "../../components/Background";
import Header from "../../components/Header/Header";
import PokemonFeed from "../../components/PokemonFeed";
import Container from "../../components/Container";
import Head from "../../components/Head";
import AnimatedPage from "../../components/AnimatedPage";
import Search from "../../components/Search";

const Home = () => {
  const { currentMode } = useSelector(({ mode }) => mode);

  return (
    <Background mode={currentMode}>
      <AnimatedPage>
        <Head
          title="PokéFeed"
          description="Home da sua Pokédex. Aqui você pode dar uma olhada nos Pokémon existentes usando o feed e procurar por Pokémon específicos."
        />
        <Container>
          <Header />
          <Search />
          <PokemonFeed />
        </Container>
      </AnimatedPage>
    </Background>
  );
};

export default Home;
