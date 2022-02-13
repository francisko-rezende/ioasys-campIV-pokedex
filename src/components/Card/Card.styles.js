import styled from "styled-components";

export const Card = styled.a`
  border-radius: 10.49px;
  color: ${({ theme, pokemonType }) => theme.colors.pokemonTypes[pokemonType]};
  border: 1px solid;
  width: 150px;
  height: 148px;
  text-decoration: none;
`;

export const Id = styled.span`
  display: block;
  color: ${({ theme, pokemonType }) => theme.colors.pokemonTypes[pokemonType]};
  text-align: right;
  padding: 5px 10px;
  padding-bottom: 0;
  font-size: calc(10 / 16 * 1rem);
`;

export const Photo = styled.img`
  display: block;
  margin: 0 auto;
  position: relative;
`;

export const Name = styled.span`
  display: block;
  text-align: center;
  font-size: calc(14 / 16 * 1rem);
  background: ${({ theme, pokemonType }) =>
    theme.colors.pokemonTypes[pokemonType]};
  /* background: rgba(0, 0, 0, 0.5); */
  color: ${({ theme }) => theme.colors.grayscale.white};
  text-transform: capitalize;
  border-radius: 0 0 10px 10px;
  padding: 5px 10px;
  position: relative;
  top: 3px;
`;
