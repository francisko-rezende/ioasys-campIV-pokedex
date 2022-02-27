import styled from "styled-components";
import { default as HeaderComponent } from "../../components/Header";

export const Header = styled(HeaderComponent)`
  @media (max-width: 1380px) {
    display: none;
  }
`;

export const DetailsContainer = styled.section`
  max-width: 440px;
  position: relative;
  z-index: 3;
  margin: 0 auto;
  background-color: ${({ theme, mode }) => theme[mode].pageBg};

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

export const MainContainer = styled.main`
  max-width: calc(830px + 14px);
  padding: 0 7px;
  margin: 0 auto;
`;
