import styled from "styled-components";
import { ReactComponent as IoasysLogo } from "../../assets/ioasys-logo-svgomg.svg";

export const Header = styled.header`
  color: ${({ theme }) => theme.colors.ioasysColor.secondaryColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  font-size: 28px;
  padding: 75px 0 60px 0;
`;

export const Logo = styled(IoasysLogo)`
  margin-right: 1rem;
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  line-height: 1.14;
`;
