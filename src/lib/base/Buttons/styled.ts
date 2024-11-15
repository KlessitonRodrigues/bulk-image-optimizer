import styled, { css } from 'styled-components';

import { cssSize } from 'src/styles/utils';

export const DefaultButton = styled.button<Props.CssProps>(
  ({ theme, w, h, p }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${cssSize(2)};
    width: ${w ?? 'fit-content'};
    height: ${h ?? cssSize(12)};
    padding: 0 ${p ?? cssSize(6)};
    background-color: ${theme.colors.bg1};
    color: ${theme.colors.text2};
    border-radius: ${theme.radius.small};
    box-shadow: ${theme.shadow.small};
    font-size: ${theme.fontSize.label};
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 0.5px;
    transition: opacity 0.2s;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    &:disabled {
      background-color: ${theme.colors.gray};
      cursor: not-allowed;
    }
  `,
);

export const MainButton = styled(DefaultButton)(
  ({ theme }) => css`
    background-color: ${theme.colors.mainBg};
    color: ${theme.colors.mainText};
  `,
);

export const DangerButton = styled(DefaultButton)(
  ({ theme }) => css`
    background-color: ${theme.colors.red};
    color: ${theme.colors.mainText};
  `,
);

export const IconButton = styled(DefaultButton)(
  () => css`
    background-color: transparent;
    box-shadow: none;
    color: inherit;
  `,
);

export const OutlineButton = styled(DefaultButton)(
  ({ theme }) => css`
    color: ${theme.colors.text1};
    box-shadow: none;
    &:disabled {
      background-color: transparent;
      color: ${theme.colors.text3};
    }
  `,
);
