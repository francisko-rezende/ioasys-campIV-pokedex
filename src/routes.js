import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "./pages/Busca/Search";
import FavoritePokemon from "./pages/Favoritos/FavoritePokemon";
import App from "./App";
import About from "./components/About";

function Navigation() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/busca" element={<Search />} />
        <Route path="/busca/:name" element={<About />} />
        <Route path="/favoritos" element={<FavoritePokemon />} />
        <Route path="/favoritos/:name" element={<About />} />
        <Route path="/sobre" element={<About />} />
      </Routes>
    </Router>
  );
}

export default Navigation;
