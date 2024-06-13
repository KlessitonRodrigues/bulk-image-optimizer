import styled, { css } from 'styled-components';

import { cssSize } from 'src/styles/utils';

export const DropBox = styled.label(
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
    cursor: pointer;

    & > input {
      display: none;
    }
  `,
);
