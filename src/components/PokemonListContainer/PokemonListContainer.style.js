import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding-bottom: 60px;

  @media (max-width: 920px) {
    gap: 18px;
    padding: unset;
  }
`;
