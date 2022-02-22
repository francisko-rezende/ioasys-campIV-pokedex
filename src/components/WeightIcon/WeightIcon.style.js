import styled from "styled-components";

export const Path = styled.path`
  fill: ${({ theme, mode }) => theme[mode].pokemonDetailIcons};
`;
