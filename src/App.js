import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import About from "./components/About";

function App() {
  const [pokemon, setPokemon] = React.useState("");

  React.useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/6/")
      .then((response) => response)
      .then(({ data }) => {
        setPokemon(data);
        console.log(data);
      });
  }, []);

  return (
    <>
      <h1>Pokedex</h1>
      <ul>
        <li>
          <Link to="/busca">Busca</Link>
        </li>
        <li>
          <Link to="/favoritos">Favoritos</Link>
        </li>
        <li>
          <Link to="/sobre">Info do poke</Link>
        </li>
      </ul>
      {pokemon && <About pokemon={pokemon} />}
    </>
  );
}

export default App;
