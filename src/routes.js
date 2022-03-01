import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import FavoritePokemon from "./pages/Favoritos/FavoritePokemon";
import Home from "./pages/Home";
import PokemonDetails from "./pages/PokemonDetails";

function Navigation() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:name" element={<PokemonDetails />} />
        <Route path="/favoritos" element={<FavoritePokemon />} />
        <Route path="/favoritos/:name" element={<PokemonDetails />} />
      </Routes>
    </Router>
  );
}

export default Navigation;
