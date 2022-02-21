import styled from "styled-components";

export const Input = styled.input`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.agnostic.searchBarText};
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
`;

export const Label = styled.label`
  font-weight: 500;
  font-size: 18px;
  line-height: 1;
  color: ${({ theme }) => theme.colors.ioasysColor.secondaryColor};
  background-color: ${({ theme, mode }) => theme[mode].pageBg};
  position: absolute;
  top: -1em;
`;
