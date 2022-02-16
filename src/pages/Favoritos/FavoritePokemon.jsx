import React from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card";

const FavoritePokemon = () => {
  const favorites = JSON.parse(window.localStorage.getItem("favoritePokemon"));
  console.log(favorites);

  return (
    <>
      <h1>Meus pokemon favoritos</h1>
      <Link to="/">Voltar</Link>
      {favorites ? (
        favorites.map((pokemon) => <Card key={pokemon.name} {...pokemon} />)
      ) : (
        <p>Você ainda não tem favoritos</p>
      )}
    </>
  );
};

export default FavoritePokemon;
