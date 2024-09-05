import styled, { css } from 'styled-components';

import { cssSize } from 'src/styles/utils';

export const DropBox = styled.div(
  ({ theme }) => css`
    position: relative;
    width: 100%;
    min-height: ${cssSize(100)};
    display: flex;
    align-items: center;
    justify-content: center;
    border: ${theme.border.small};
    border-radius: ${theme.radius.large};
    padding: ${cssSize(4)};
  `,
);

export const DropBoxBtn = styled.label(
  ({ theme }) => css`
    position: absolute;
    bottom: ${cssSize(4)};
    right: ${cssSize(4)};
    width: ${cssSize(14)};
    height: ${cssSize(14)};
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.mainBg};
    color: ${theme.colors.mainText};
    border-radius: ${theme.radius.large};
    box-shadow: ${theme.shadow.small};
    cursor: pointer;

    &:hover {
      opacity: 0.75;
    }

    & > input {
      display: none;
    }
  `,
);
