import styled from "styled-components";

export const PokemonTraitList = styled.ul`
  color: ${({ theme, mode }) =>
    mode === "darkMode"
      ? theme.colors.grayscale.white
      : theme.colors.grayscale.darkGray};
  margin-bottom: 56px;
  display: flex;
  justify-content: space-between;
`;
