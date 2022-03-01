import * as SwitchPrimitive from "@radix-ui/react-switch";
import styled from "styled-components";

export const Switch = styled(SwitchPrimitive.Root)`
  all: unset;
  width: 39px;
  height: 27px;
  background-color: transparent;
  border-radius: 9999px;
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.ioasysColor.secondaryColor};
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  cursor: pointer;
`;

export const Thumb = styled(SwitchPrimitive.Thumb)`
  display: block;
  width: 15px;
  height: 15px;
  background-color: ${({ theme, mode }) =>
    mode === "darkMode"
      ? "hsla(257, 3%, 56%, 1)"
      : theme.colors.ioasysColor.secondaryColor};
  border-radius: 9999px;
  transform: ${({ mode }) =>
    mode === "darkMode" ? "translateX(6px)" : "translateX(19px)"};
  will-change: transform;
`;
