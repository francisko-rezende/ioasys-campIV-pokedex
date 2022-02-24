import { capitalizeWord } from "./capitalizeWord";

export function getFormattedMoves(pokemon) {
  const hasMoreThanOneAbility = pokemon.abilities.length > 1;

  const getAbilityName = ({ ability }) => ability.name;

  if (hasMoreThanOneAbility) {
    return pokemon.abilities
      .slice(0, 2)
      .map(getAbilityName)
      .map((abilityName) => capitalizeWord(abilityName))
      .join(" / ");
  }
  return capitalizeWord(pokemon.abilities[0].ability.name);
}
