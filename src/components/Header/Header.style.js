import styled from "styled-components";
import { ReactComponent as IoasysLogo } from "../../assets/ioasys-logo.svg";

export const Header = styled.header`
  color: ${({ theme }) => theme.colors.ioasysColor.secondaryColor};
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 28px;
`;

export const Logo = styled(IoasysLogo)`
  margin-right: 1rem;
`;
