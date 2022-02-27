import styled from "styled-components";

export const PokemonTraitList = styled.ul`
  color: ${({ theme, mode }) => theme[mode].textMain};
  margin-bottom: 56px;
  display: flex;
  justify-content: space-between;
`;
