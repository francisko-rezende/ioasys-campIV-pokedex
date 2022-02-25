import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FavoritePokemon from "./pages/Favoritos/FavoritePokemon";
// import App from "./App";
import PokemonDetails from "./pages/PokemonDetails";

function Navigation() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<App />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/:name" element={<PokemonDetails />} />
        <Route path="/favoritos" element={<FavoritePokemon />} />
        <Route path="/favoritos/:name" element={<PokemonDetails />} />
        {/* <Route path="/sobre" element={<PokemonDetails />} /> */}
      </Routes>
    </Router>
  );
}

export default Navigation;
