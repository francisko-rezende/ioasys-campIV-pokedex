import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card = styled(Link)`
  border-radius: 10.49px;
  color: ${({ theme, type }) => theme.colors.pokemonTypes[type]};
  border: 1px solid;
  width: 150px;
  height: 148px;
  text-decoration: none;
  background-color: ${({ theme, mode }) => theme[mode].cardBg};

  @media (max-width: 565px) {
    width: 104px;
    height: 112px;
  }
`;

export const Id = styled.span`
  display: block;
  color: ${({ theme, type }) => theme.colors.pokemonTypes[type]};
  text-align: right;
  padding: 5px 10px;
  padding-bottom: 0;
  font-size: calc(10 / 16 * 1rem);

  @media (max-width: 565px) {
    font-size: calc(8 / 16 * 1rem);
  }
`;

export const Photo = styled.img`
  display: block;
  margin: 0 auto;
  position: relative;
  /* max-width: 90%; */

  @media (max-width: 565px) {
    width: 60%;
    top: -15%;
  }
`;

export const Name = styled.span`
  display: block;
  text-align: center;
  font-size: calc(14 / 16 * 1rem);
  background: ${({ theme, type }) => theme.colors.pokemonTypes[type]};
  color: ${({ theme }) => theme.colors.grayscale.white};
  text-transform: capitalize;
  border-radius: 0 0 10px 10px;
  padding: 5px 10px;
  position: relative;
  top: 2px;

  @media (max-width: 565px) {
    top: unset;
    font-size: calc(10 / 16 * 1rem);
    top: -24%;
  }
`;
