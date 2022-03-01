import styled from "styled-components";
import { ReactComponent as UnstyledClearSearchIcon } from "../../assets/icons/clear-search-svgomg.svg";

export const Input = styled.input`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.grayscale.mediumGray};
  font-size: 1rem;
  line-height: 1.5;
  width: 100%;
  padding: calc(13 / 16 * 1em) 0;

  &:focus {
    outline: none;
  }
`;

export const Form = styled.form`
  border: 2px solid ${({ theme }) => theme.colors.ioasysColor.secondaryColor};
  border-radius: 10.49px;
  padding: 0 32px;
  display: flex;
  align-items: center;
  position: relative;
  flex: 1;
`;

export const Label = styled.label`
  font-weight: 500;
  font-size: 18px;
  line-height: 1;
  color: ${({ theme }) => theme.colors.ioasysColor.secondaryColor};
  background-color: ${({ theme, mode }) =>
    mode === "darkMode"
      ? theme.colors.grayscale.darkGray
      : theme.colors.grayscale.white};
  position: absolute;
  top: -0.8em;
  padding: 0 2px;

  @media (max-width: 565px) {
    font-size: 16px;
  }
`;

export const ClearSearchIcon = styled(UnstyledClearSearchIcon)`
  cursor: pointer;
`;
