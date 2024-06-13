import styled, { css } from 'styled-components';

import { cssSize } from 'src/styles/utils';

export const CheckBoxContainer = styled.div<Props.CssProps>(
  ({ theme, active }) => css`
    display: flex;
    align-items: center;
    gap: ${cssSize(2)};
    cursor: pointer;
    width: 100%;

    &:hover {
      opacity: 0.7;
    }

    & strong {
      color: ${theme.colors.text3};
      font-size: ${theme.fontSize.label};
      ${active && `color: ${theme.colors.text2};`}
    }
  `,
);

export const CheckBoxMark = styled.div<Props.CssProps>(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${cssSize(6)};
    height: ${cssSize(6)};
    border-radius: 4px;
    border: ${theme.border.small};
    color: ${theme.colors.mainBg};
  `,
);
