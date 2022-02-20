import styled from "styled-components";

export const FavoriteIcon = styled.svg`
  fill: ${({ theme, isFavorite }) =>
    isFavorite ? theme.colors.ioasysColor.secondaryColor : "transparent"};
  transition: 0.2s;
`;
