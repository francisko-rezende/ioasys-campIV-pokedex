import styled from "styled-components";

export const ErrorText = styled.p`
  font-size: 22px;
  color: hsla(0, 0%, 74%, 1);
  font-weight: 600;
  position: relative;

  &::before {
    content: "Ops";
    position: absolute;
    font-size: 148px;
    font-weight: 700;
    bottom: 15px;
    right: 115px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
