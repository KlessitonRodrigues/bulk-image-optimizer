import styled, { css } from 'styled-components';

import { cssSize } from 'src/styles/utils';

export const RoundedBtn = styled.button<Props.CssProps>(
  ({ theme, w, h, p }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${cssSize(2)};
    width: ${w ?? 'fit-content'};
    height: ${h ?? cssSize(12)};
    padding: 0 ${p ?? cssSize(4)};
    background-color: ${theme.colors.bg1};
    color: ${theme.colors.text2};
    border-radius: ${theme.radius.small};
    box-shadow: ${theme.shadow.small};
    font-size: ${theme.fontSize.label};
    font-weight: bold;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;
    }

    &:disabled {
      background-color: ${theme.colors.gray};
    }
  `,
);

export const MainRoundedBtn = styled(RoundedBtn)(
  ({ theme }) => css`
    background-color: ${theme.colors.mainBg};
    color: ${theme.colors.mainText};
  `,
);

export const DangerRoundedBtn = styled(RoundedBtn)(
  ({ theme }) => css`
    background-color: ${theme.colors.red};
    color: ${theme.colors.mainText};
  `,
);

export const OutlineBtn = styled(RoundedBtn)(
  ({ theme, w }) => css`
    width: ${w ?? 'fit-content'};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${cssSize(2)};
    color: ${theme.colors.text1};
    box-shadow: none;
    cursor: pointer;

    &:disabled {
      background-color: transparent;
      color: ${theme.colors.text3};
    }
  `,
);
