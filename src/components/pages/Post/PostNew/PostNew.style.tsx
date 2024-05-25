import styled from "styled-components"
import { theme } from '~/styledComponents';

export const Groups = styled.ul`
  padding-top: 0.5rem;
`;

export const Group = styled.li`
  width: 100%;
  display: flex;
  padding: 2rem 0;
  border-bottom: 1px solid ${theme.color.bgztGrey50};

  &:last-child {
    border-bottom: 0;
  }
`;

export const Label = styled.div<{ center?: boolean; pad?: number }>`
  width: 10.5rem;
  font-size: 18px;
  font-weight: 400;
  color: ${theme.color.bgztGrey900};

  & > span {
    color: ${theme.color.bgztRed500};
  }

  & > small {
    color: ${theme.color.bgztGrey300};
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    margin-left: 0.25rem;
  }
  ${({ center }) =>
    center &&
    `
    display: flex;
    align-items: center;
  `};
  ${({ pad }) =>
    pad &&
    `
    padding-top: ${pad}px;
  `};
`;

export const NameInput = styled.input<{ error: boolean }>`
  width: 100%;
  ${(p) =>
    p.error &&
    `
    border-color: ${p.theme.color.error} !important;
  `};
`;

export const BodyInput = styled.textarea<{ error: boolean }>`
  width: 100%;
  ${(p) =>
    p.error &&
    `
    border-color: ${p.theme.color.error} !important;
  `};
`;