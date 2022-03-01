import styled from "styled-components";

export const PokemonFlavorText = styled.p`
  color: ${({ theme, mode }) =>
    mode === "darkMode"
      ? theme.colors.grayscale.white
      : theme.colors.grayscale.darkGray};
  font-size: 14px;
  margin-bottom: 30px;
`;
