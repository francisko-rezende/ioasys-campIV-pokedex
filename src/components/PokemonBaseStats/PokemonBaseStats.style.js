import styled from "styled-components";

export const BaseStatsTitle = styled.h3`
  color: ${({ theme, pokemonType }) => theme.colors.pokemonTypes[pokemonType]};
  margin-bottom: 20px;
`;

export const BaseStatItem = styled.li`
  display: grid;
  align-items: center;
  grid-template-columns: 70px 48px 1fr;
  position: relative;

  &::before {
    position: absolute;
    display: block;
    content: "";
    height: 100%;
    border-right: 1px solid ${({ theme }) => theme.colors.grayscale.lightGray};
    top: 0;
    left: 54px;
  }
`;

export const BaseStatName = styled.span`
  text-transform: uppercase;
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
  color: ${({ theme, pokemonType }) => theme.colors.pokemonTypes[pokemonType]};
  position: relative;
`;

export const BaseStatValue = styled.span`
  color: ${({ theme, mode }) => theme[mode].textMain};
`;

export const BarWrapper = styled.div`
  background-color: ${({ theme, pokemonType }) =>
    theme.colors.pokemonTypes[`${pokemonType}Bg`]};
  width: 100%;
  height: 6px;
  position: relative;
  top: 1px;
`;

export const Bar = styled.div`
  width: ${({ value }) => (value / 245) * 300}px;
  height: 6px;
  background-color: ${({ theme, pokemonType }) =>
    theme.colors.pokemonTypes[pokemonType]};
  position: relative;
`;
