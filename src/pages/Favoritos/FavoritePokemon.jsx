import React from "react";
import { Link } from "react-router-dom";

const FavoritePokemon = () => {
  return (
    <>
      <h1>Meus pokemon favoritos</h1>
      <Link to="/">Voltar</Link>
    </>
  );
};

export default FavoritePokemon;
