import styled from "styled-components";

export const PokemonFlavorText = styled.p`
  color: ${({ theme, mode }) => theme[mode].textMain};
  font-size: 14px;
  margin-bottom: 30px;
`;
