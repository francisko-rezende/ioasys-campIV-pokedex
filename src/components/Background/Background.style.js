import styled from "styled-components";

export const Background = styled.main`
  background-color: ${({ theme, mode }) => theme[mode].pageBg};
  height: 100%;
  min-height: 100vh;
  width: 100%;
  border-top: 15px solid
    ${({ theme, pokemonType }) =>
      theme.colors.pokemonTypes[pokemonType] ||
      theme.colors.ioasysColor.secondaryColor};
`;
