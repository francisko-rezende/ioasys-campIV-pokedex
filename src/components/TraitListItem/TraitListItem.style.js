import styled from "styled-components";

export const Item = styled.li`
  font-size: 14px;
  position: relative;
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const TraitName = styled.h3`
  display: inline-block;
  content: "${({ fadedText }) => fadedText}";
  font-weight: 400;
  font-size: 12px;
  color: ${({ theme }) => theme.agnostic.textSecondary};
  text-transform: capitalize;
  position: absolute;
  top: 26px;
  text-align: center;
  width: 100%;
`;
