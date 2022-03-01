import React from "react";

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

export default PokemonFlavorText;
