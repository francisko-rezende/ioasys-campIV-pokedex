import styled from "styled-components";

export const ErrorText = styled.p`
  position: relative;
  font-size: 148px;
  font-weight: 700;
  margin-top: 100px;
  color: hsla(0, 0%, 74%, 1);

  &::before {
    content: "Este pokemon não foi encontrado ;(";
    font-size: 22px;
    color: hsla(0, 0%, 74%, 1);
    font-weight: 600;
    position: absolute;
    right: -210px;
    width: 351px;
    bottom: -10px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
