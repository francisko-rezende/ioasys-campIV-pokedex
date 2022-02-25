import { Link } from "react-router-dom";
import styled from "styled-components";

export const FavLink = styled(Link)`
  margin-left: calc(60px - 1rem);
  padding: 1rem;
  padding-right: 0;
  display: flex;
  gap: 10px;
  color: ${({ theme }) => theme.colors.ioasysColor.secondaryColor};

  @media (max-width: 920px) {
    margin-left: calc(20px - 1rem);
  }
`;

export const FavLinkText = styled.span`
  @media (max-width: 920px) {
    display: none;
  }
`;
