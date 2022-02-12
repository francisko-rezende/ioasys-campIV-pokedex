import { Link } from "react-router-dom";

function App() {
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
      </ul>
    </>
  );
}

export default App;
