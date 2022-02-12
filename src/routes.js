import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "./pages/Busca/Search";
import FavoritePokemon from "./pages/Favoritos/FavoritePokemon";
import App from "./App";

function Navigation() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/busca" element={<Search />} />
        <Route path="/favoritos" element={<FavoritePokemon />} />
      </Routes>
    </Router>
  );
}

export default Navigation;
