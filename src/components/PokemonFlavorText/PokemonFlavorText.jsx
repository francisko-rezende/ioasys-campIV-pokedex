import React from "react";

import PropTypes from "prop-types";

import api from "../../services/api";
import * as S from "./PokemonFlavorText.style";

const PokemonFlavorText = ({ pokemon, mode, pokemonType }) => {
  const [flavorText, setFlavorText] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    setIsLoading(true);

    api
      .get(`/pokemon-species/${pokemon.name}`)
      .then(({ data }) => {
        const isLanguageEN = ({ language }) => language.name === "en";

        const englishFlavorTextObj =
          data.flavor_text_entries.find(isLanguageEN);

        if (englishFlavorTextObj) {
          setFlavorText(englishFlavorTextObj.flavor_text);

          return;
        }

        setFlavorText(data.flavor_text_entries[0].flavor_text);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.PokemonFlavorText pokemonType={pokemonType} mode={mode}>
      {flavorText}
      {isLoading && "Loading..."}
      {error &&
        "Era pra ter um textinho sobre esse pokémon aqui mas infelizmente rolou um erro. Tenta de novo depois, por favor?"}
    </S.PokemonFlavorText>
  );
};

PokemonFlavorText.propTypes = {
  mode: PropTypes.string,
  pokemonType: PropTypes.string,
  pokemon: PropTypes.shape({
    abilities: PropTypes.array,
    base_experience: PropTypes.number,
    forms: PropTypes.array,
    game_indices: PropTypes.array,
    height: PropTypes.number,
    held_items: PropTypes.array,
    id: PropTypes.number,
    is_default: PropTypes.bool,
    location_area_encounters: PropTypes.string,
    moves: PropTypes.array,
    name: PropTypes.string,
    order: PropTypes.number,
    past_types: PropTypes.array,
    species: PropTypes.object,
    sprites: PropTypes.object,
    stats: PropTypes.array,
    types: PropTypes.array,
    weight: PropTypes.number,
  }),
};

export default PokemonFlavorText;
