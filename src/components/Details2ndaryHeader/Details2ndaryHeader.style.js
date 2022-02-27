import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 25px;

  @media (max-width: 1380px) {
    position: absolute;
    top: -170px;
    width: 352px;
    display: grid;
    grid-template-columns: repeat(2, auto) 1fr;
    justify-content: start;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: transparent;
  height: fit-content;
  border: none;
  display: flex;
`;

export const PokemonName = styled.h2`
  text-transform: capitalize;
  color: ${({ theme, pokemonType }) => theme.colors.pokemonTypes[pokemonType]};

  @media (max-width: 1380px) {
    color: ${({ theme }) => theme.colors.grayscale.white};
  }
`;

export const PokemonId = styled.span`
  color: ${({ theme, pokemonType }) => theme.colors.pokemonTypes[pokemonType]};
  font-weight: 700;
  font-size: 12px;
  line-height: 2.5;
  align-self: flex-end;
  margin-left: 15px;

  @media (max-width: 1380px) {
    color: ${({ theme }) => theme.colors.grayscale.white};
    justify-self: end;
  }
`;
