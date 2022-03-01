import styled from "styled-components";

import { default as HeaderComponent } from "../../components/Header";

export const Header = styled(HeaderComponent)`
  @media (max-width: 1380px) {
    display: none;
  }
`;

export const MainContainer = styled.main`
  max-width: calc(830px + 14px);
  padding: 0 7px;
  margin: 0 auto;
`;
