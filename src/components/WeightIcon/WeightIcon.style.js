import styled from "styled-components";

export const Path = styled.path`
  fill: ${({ theme, mode }) =>
    mode === "darkMode"
      ? theme.colors.grayscale.white
      : theme.colors.grayscale.darkGray};
`;
