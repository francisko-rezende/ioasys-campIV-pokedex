import styled from "styled-components";

export const DetailsContainer = styled.section`
  max-width: 440px;
  position: relative;
  z-index: 3;
  margin: 0 auto;
  background-color: ${({ theme, mode }) =>
    mode === "darkMode"
      ? theme.colors.grayscale.darkGray
      : theme.colors.grayscale.white};

  @media (max-width: 1380px) {
    margin-top: 163px;
    border-radius: 15px;
    padding: 80px 40px 70px 40px;
    max-width: calc(440px + 80px);
  }

  @media (max-width: calc(520px + 14px)) {
    padding-left: 32px;
    padding-right: 32px;
  }
`;
