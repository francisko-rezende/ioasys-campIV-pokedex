import styled, { keyframes } from "styled-components";

const shake = keyframes`
  0% { transform: translate(0, 0) rotate(0); }
  20% { transform: translate(-10px, 0) rotate(-20deg); }
  30% { transform: translate(10px, 0) rotate(20deg); }
  50% { transform: translate(-10px, 0) rotate(-10deg); }
  60% { transform: translate(10px, 0) rotate(10deg); }
  100% { transform: translate(0, 0) rotate(0); }
`;

export const PokeballContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100px;
  transform: translateY(-40px);
`;

export const Pokeball = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  background: #fff;
  border: 2.5px solid #000;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: inset -2px 2px 0 2px #ccc;
  animation: ${shake} 1.25s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite;

  &::before,
  &::after {
    content: "";
    position: absolute;
  }

  &::before {
    background: ${({ theme }) => theme.colors.ioasysColor.secondaryColor};
    width: 100%;
    height: 50%;
  }

  &::after {
    top: calc(50% - 2.5px);
    width: 100%;
    height: 5px;
    background: #000;
  }
`;

export const PokeballButton = styled.div`
  position: absolute;
  top: calc(50% - (30px / 4));
  left: calc(50% - (30px / 4));
  width: calc(60px / 4);
  height: calc(60px / 4);
  background: #7f8c8d;
  border: 2.5px solid #fff;
  border-radius: 50%;
  z-index: 10;
  box-shadow: 0 0 0 2px black;
`;

export const LoadingText = styled.span`
  color: ${({ theme, mode }) => theme[mode].textMain};
`;
