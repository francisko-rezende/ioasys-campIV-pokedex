import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const About = ({ pokemon }) => {
  // const bulba = JSON.parse(window.localStorage.getItem("bulba"));
  const pokemonType = pokemon.types[0].type.name;
  const [flavorText, setFlavorText] = React.useState("");

  const getSvgBaseAddress = (id) =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;

  const formatId = (id) => {
    const idLength = String(id).length;

    switch (idLength) {
      case 1:
        return `#00${id}`;
      case 2:
        return `#0${id}`;
      default:
        return `#${id}`;
    }
  };

  React.useEffect(() => {
    axios
      .get(pokemon.species.url)
      .then(({ data }) =>
        setFlavorText(data.flavor_text_entries[0].flavor_text)
      );
  }, []);

  return (
    <>
      <h1>Detalhes</h1>
      <Link to="/">Voltar</Link>
      <img src={getSvgBaseAddress(pokemon.id)} alt="foto do pokemon" />
      <h2>{pokemon.name}</h2>
      <span>{formatId(pokemon.id)}</span>
      <hr></hr>
      <ul>
        {pokemon.types.map(({ type }) => (
          <button key={type.name}>{type.name}</button>
        ))}
      </ul>
      <hr />
      <ul>
        <li>height: {pokemon.height / 10} m</li>
        <li>weight: {pokemon.weight / 10} kg</li>
        <li>
          moves: {pokemon.abilities[0].ability.name} /{" "}
          {pokemon.abilities[1].ability.name}
        </li>
      </ul>
      <hr />
      <p>{flavorText}</p>
      <hr />
      <h2>Base Stats</h2>
      <ul>
        <li style={{ display: "flex", alignItems: "center" }}>
          hp: 45{" "}
          <Wrapper
            role="progressbar"
            aria-valuenow="45"
            aria-valuemin="0"
            aria-valuemax="255"
            pokemonType={pokemonType}
          >
            <Bar pokemonType={pokemonType} value={45} />
          </Wrapper>
        </li>
        <li>
          Total pra calcular o tamanho das barras: 245. Eg: 45 / 245 * 300 = 55
        </li>
        {pokemon.stats.map((item) => (
          <li
            key={item.stat.base_stat}
            style={{
              display: "grid",
              alignItems: "center",
              gridTemplateColumns: "1fr auto auto",
            }}
          >
            <span>{item.stat.name}</span>
            <span>{item.base_stat}</span>{" "}
            <Wrapper
              role="progressbar"
              aria-valuenow={item.base_stat}
              aria-valuemin="0"
              aria-valuemax="255"
              pokemonType={pokemonType}
            >
              <Bar pokemonType={pokemonType} value={item.base_stat} />
            </Wrapper>
          </li>
        ))}
      </ul>
    </>
  );
};

const Wrapper = styled.div`
  /* background-color: ${({ theme, pokemonType }) =>
    theme.colors.pokemonTypes[pokemonType]}; */
  background-color: hsla(100, 56%, 54%, 0.2);
  width: 300px;
  height: 6px;
  position: relative;
  top: 1px;
  margin-left: 1rem;
`;

const Bar = styled.div`
  width: ${({ value }) => (value / 245) * 300}px;
  height: 6px;
  background-color: ${({ theme, pokemonType }) =>
    theme.colors.pokemonTypes[pokemonType]};
  position: relative;
  top: 1px;
`;

export default About;