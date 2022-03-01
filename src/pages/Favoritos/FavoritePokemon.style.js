import styled from "styled-components";

export const PlaceholderCard = styled.div`
  width: 150px;
  height: 148px;
  border-radius: 10.49px;
  background-color: ${({ theme, mode }) =>
    mode === "darkMode"
      ? theme.colors.otherColors.genericDarkGray
      : theme.colors.otherColors.genericLightGray};

  @media (max-width: 565px) {
    width: 104px;
    height: 112px;
  }
`;
