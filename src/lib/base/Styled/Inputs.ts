import styled, { css } from 'styled-components';

import { cssSize } from 'src/styles/utils';

export const Label = styled.label<Props.CssProps>(
  () => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${cssSize(2)};
  `,
);

export const InputLabel = styled.label<Props.CssProps>(
  ({ theme, w }) => css`
    width: ${w ?? '100%'};
    display: flex;
    align-items: center;
    background-color: ${theme.colors.bg1};
    border-radius: ${theme.radius.small};
    border: ${theme.border.small};
    padding: ${cssSize(2)};

    svg {
      transform: scale(1.3);
      cursor: pointer;
    }

    input {
      border: none;
    }
  `,
);

export const Input = styled.input<Props.CssProps>(
  ({ theme }) => css`
    width: 100%;
    background-color: transparent;
    border: none;
    font-size: ${theme.fontSize.body};
    border-bottom: ${theme.border.small};
    padding: 0 ${cssSize(2)};
  `,
);

export const Switch = styled.div<Props.CssProps>(
  ({ theme, active }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${cssSize(14)};
    padding: ${cssSize(3.5)} 0;
    border-radius: ${theme.radius.large};
    background-color: ${theme.colors.bg2};
    border: ${theme.border.small};
    position: relative;
    cursor: pointer;
    transition: background-color 0.3s linear;
    ${active && `background-color: ${theme.colors.main};`}

    &:hover {
      opacity: 0.7;
    }

    &::after {
      content: '';
      display: inline-block;
      width: ${cssSize(6)};
      height: ${cssSize(6)};
      border-radius: 50%;
      background-color: ${theme.colors.bg1};
      border: ${theme.border.small};
      position: absolute;
      top: 0.05rem;
      ${active ? 'right: 0;' : 'left: 0;'}
    }
  `,
);

export const TextArea = styled.textarea<Props.CssProps>(
  ({ theme }) => css`
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    height: ${cssSize(80)};
    min-height: ${cssSize(20)};
    padding: ${cssSize(4)};
    border: ${theme.border.small};
    border-radius: ${theme.radius.medium};
    background-color: ${theme.colors.bg1};
    color: ${theme.colors.mainBg};
    font-size: ${theme.fontSize.body};
  `,
);

export const RangeInput = styled.input<Props.CssProps>(
  ({ theme }) => css`
    width: 100%;
    height: ${cssSize(1)};
    margin: ${cssSize(6)} 0;
    appearance: none;
    background: ${theme.colors.bg4};
    border-radius: ${theme.radius.medium};

    &::-webkit-slider-thumb {
      appearance: none;
      width: ${cssSize(6)};
      height: ${cssSize(6)};
      background: ${theme.colors.main};
      border-radius: ${theme.radius.medium};
      cursor: pointer;

      &:hover {
        background: ${theme.colors.mainBg};
      }
    }

    &::-moz-range-thumb {
      appearance: none;
      width: ${cssSize(6)};
      height: ${cssSize(6)};
      background: ${theme.colors.main};
      border-radius: ${theme.radius.medium};
      cursor: pointer;
    }
  `,
);
