import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;

export const Div = styled.div`
  animation-name: ${fadeIn};
  animation-duration: 0.3s;
`;
