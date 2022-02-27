import styled from "styled-components";

export const PlaceholderCard = styled.div`
  width: 150px;
  height: 148px;
  border-radius: 10.49px;
  background-color: ${({ theme, mode }) => theme[mode].placeholderCardBg};

  @media (max-width: 565px) {
    width: 104px;
    height: 112px;
  }
`;
