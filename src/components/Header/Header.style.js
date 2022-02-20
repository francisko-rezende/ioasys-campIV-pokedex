import styled from "styled-components";
import { ReactComponent as IoasysLogo } from "../../assets/ioasys-logo-svgomg.svg";

export const Header = styled.header`
  color: ${({ theme }) => theme.colors.ioasysColor.secondaryColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  font-size: 28px;
  padding: 60px 0;
`;

export const Logo = styled(IoasysLogo)`
  margin-right: 1rem;
`;
