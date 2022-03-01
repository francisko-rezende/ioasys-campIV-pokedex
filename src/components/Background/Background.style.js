import styled from "styled-components";

export const Background = styled.div`
  background-color: ${({ theme, mode }) =>
    mode === "darkMode"
      ? theme.colors.grayscale.darkGray
      : theme.colors.grayscale.white};
  height: 100%;
  min-height: 100vh;
  width: 100%;
  border-top: 15px solid
    ${({ theme, pokemonType }) =>
      theme.colors.pokemonTypes[pokemonType] ||
      theme.colors.ioasysColor.secondaryColor};
`;
