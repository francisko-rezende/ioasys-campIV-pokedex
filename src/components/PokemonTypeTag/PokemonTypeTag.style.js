import styled from "styled-components";

export const PokemonTypeTag = styled.span`
  text-transform: capitalize;
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 35px;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  padding: 2px 8px;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.grayscale.white};
  background-color: ${({ theme, pokemonType }) =>
    theme.colors.pokemonTypes[pokemonType]};
`;
