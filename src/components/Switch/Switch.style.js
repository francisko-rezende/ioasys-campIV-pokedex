import styled from "styled-components";
import * as SwitchPrimitive from "@radix-ui/react-switch";

export const Switch = styled(SwitchPrimitive.Root)`
  all: unset;
  width: 39px;
  height: 27px;
  background-color: transparent;
  border-radius: 9999px;
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.ioasysColor.secondaryColor};
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  /* '&[data-state="checked"]': { backgroundColor: 'transparent' }, */
`;

export const Thumb = styled(SwitchPrimitive.Thumb)`
  display: block;
  width: 15px;
  height: 15px;
  background-color: ${({ theme, mode }) =>
    mode === "dark"
      ? "hsla(257, 3%, 56%, 1)"
      : theme.colors.ioasysColor.secondaryColor};
  border-radius: 9999px;
  transition: transform 100ms;
  transform: ${({ mode }) =>
    mode === "dark" ? "translateX(6px)" : "translateX(19px)"};
  will-change: transform;

  /* '&[data-state="checked"]': { transform: 'translateX(19px)', backgroundColor: 'hsla(343, 97%, 47%, 1)'}, */
`;
