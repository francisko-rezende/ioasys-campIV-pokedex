import { Link } from "react-router-dom";
import styled from "styled-components";

export const Card = styled(Link)`
  border-radius: 10.49px;
  color: ${({ theme, type }) => theme.colors.pokemonTypes[type]};
  border: 1px solid;
  width: 150px;
  height: 148px;
  text-decoration: none;
  background-color: ${({ theme, mode }) => theme[mode].cardBg};
`;

export const Id = styled.span`
  display: block;
  color: ${({ theme, type }) => theme.colors.pokemonTypes[type]};
  text-align: right;
  padding: 5px 10px;
  padding-bottom: 0;
  font-size: calc(10 / 16 * 1rem);
`;

export const Photo = styled.img`
  display: block;
  margin: 0 auto;
  position: relative;
  transform: scaleX(-1);
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
  top: 4px;
`;
