export function getFormattedMoves(pokemon) {
  const capitalize = (word) => {
    const firstLetter = word[0];
    const capitalizedWord = word.replace(
      firstLetter,
      firstLetter.toUpperCase()
    );
    return capitalizedWord;
  };

  const hasMoreThanOneAbility = pokemon.abilities.length > 1;

  const getAbilityName = ({ ability }) => ability.name;

  if (hasMoreThanOneAbility) {
    return pokemon.abilities
      .slice(0, 2)
      .map(getAbilityName)
      .map((abilityName) => capitalize(abilityName))
      .join(" / ");
  }
  return capitalize(pokemon.abilities[0].ability.name);
}
