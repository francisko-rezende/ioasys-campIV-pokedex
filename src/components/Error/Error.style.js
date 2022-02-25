import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ErrorText = styled.span`
  position: relative;
  font-size: 148px;
  font-weight: 700;
  /* margin-top: 29px; */
  transform: translateY(-50px);
  color: hsla(0, 0%, 74%, 1);

  @media (max-width: 565px) {
    margin-top: unset;
    margin-bottom: 50px;
  }
`;

export const MainMessage = styled.p`
  font-size: 22px;
  color: hsla(0, 0%, 74%, 1);
  font-weight: 600;
  position: absolute;
  bottom: -10px;
  left: 158px;
  width: 351px;

  @media (max-width: 565px) {
    position: unset;
    text-align: center;
  }
`;
