export const convertToThreeDigitNumber = (number) => {
  const numberLength = String(number).length;

  switch (numberLength) {
    case 1:
      return `00${number}`;
    case 2:
      return `0${number}`;
    default:
      return `${number}`;
  }
};
