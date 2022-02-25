import styled from "styled-components";

export const SearchResultContainer = styled.section`
  width: 100%;
  height: 40vh;
  margin-bottom: 10vh;
  border-bottom: 1px solid
    ${({ theme }) => theme.colors.ioasysColor.secondaryColor};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 71px;
`;
