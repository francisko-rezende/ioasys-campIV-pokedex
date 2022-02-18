import styled from "styled-components";

export const Container = styled.main`
  background-color: ${({ theme, mode }) => theme[mode].pageBg};
  height: 100vh;
  width: 100vw;
  border-top: 15px solid
    ${({ theme, pokemonType }) =>
      theme.colors.pokemonTypes[pokemonType] ||
      theme.colors.ioasysColor.secondaryColor};
`;
