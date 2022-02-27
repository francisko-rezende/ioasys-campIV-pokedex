import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import { ReactComponent as BackArrowIcon } from "../../assets/icons/back-svgomg.svg";

export const SecondaryHeaderWrapper = styled.div`
  padding: 60px 0;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  border-top: 2px solid
    ${({ theme, mode }) => theme[mode].favoritesHorizontalSeparator};

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    border: unset;
    padding-top: 0;
  }
`;

export const Link = styled(RouterLink)`
  color: ${({ theme }) => theme.agnostic.back};
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  padding: 1rem;
  padding-left: 0;

  @media (max-width: 500px) {
    position: absolute;
    bottom: 6%;
    left: 45%;
    flex-direction: column;
    align-items: center;
  }
`;

export const BackArrow = styled(BackArrowIcon)`
  margin-right: 13px;

  @media (max-width: 500px) {
    margin: unset;
    margin-bottom: 5px;
  }
`;

export const H2 = styled.h2`
  display: flex;
  font-size: 18px;
  gap: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.ioasysColor.secondaryColor};
  justify-self: center;
  transform: translateX(-53px);

  @media (max-width: 500px) {
    transform: unset;
  }
`;
