export const capitalizeWord = (word) => {
  const firstLetter = word[0];
  const capitalizedWord = word.replace(firstLetter, firstLetter.toUpperCase());
  return capitalizedWord;
};
