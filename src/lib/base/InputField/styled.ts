import styled, { css } from 'styled-components';

import { cssSize } from 'src/styles/utils';

export const Row = styled.div(
  () => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: ${cssSize(2)};
    white-space: nowrap;
  `,
);

export const Label = styled.label(
  ({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${cssSize(2)};
    cursor: pointer;
    user-select: none;
    font-size: ${theme.fontSize.label};
    font-family: 'Roboto', sans-serif;

    &:hover b {
      color: ${theme.colors.main};
    }
  `,
);

export const InputBox = styled.label(
  ({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    background-color: ${theme.colors.bg1};
    border-radius: ${theme.radius.small};
    border: ${theme.border.small};
    padding: ${cssSize(3)};
    cursor: pointer;

    & svg {
      transform: scale(1.4);
    }
  `,
);

export const Input = styled.input(
  ({ theme }) => css`
    width: 100%;
    background-color: transparent;
    border: none;
    font-size: ${theme.fontSize.body};
    font-weight: bold;
    padding: 0 ${cssSize(2)};
  `,
);

export const Switch = styled.div<Props.CssProps>(
  ({ theme, active }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${cssSize(12)};
    padding: ${cssSize(3.5)} 0;
    margin-top: ${cssSize(0.5)};
    border-radius: ${theme.radius.large};
    background-color: ${theme.colors.bg2};
    position: relative;
    cursor: pointer;
    transition: 0.3s linear;
    ${active && `background-color: ${theme.colors.main};`}

    &:hover {
      opacity: 0.7;
    }

    &::after {
      content: '';
      display: inline-block;
      width: ${cssSize(5)};
      height: ${cssSize(5)};
      border-radius: 50%;
      background-color: ${theme.colors.bg1};
      position: absolute;
      top: ${cssSize(1)};
      ${active ? 'right: 2px;' : 'left: 2px;'}
    }
  `,
);

export const TextArea = styled.textarea(
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
    font-size: ${theme.fontSize.body};
  `,
);

export const RangeInput = styled.input(
  ({ theme }) => css`
    width: 100%;
    height: ${cssSize(1)};
    appearance: none;
    background: ${theme.colors.bg4};
    border-radius: ${theme.radius.medium};
    margin: ${cssSize(1)} 0 ${cssSize(3)};
    position: relative;

    &::-webkit-slider-thumb {
      appearance: none;
      width: ${cssSize(6)};
      height: ${cssSize(6)};
      background: ${theme.colors.main};
      border-radius: ${theme.radius.medium};
      cursor: pointer;
      &:hover {
        background: ${theme.colors.mainBg};
        box-shadow: ${theme.shadow.medium};
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

export const CheckBox = styled.div<Props.CssProps>(
  ({ theme, active }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${cssSize(7)};
    height: ${cssSize(7)};
    margin-top: ${cssSize(0.5)};
    padding: ${cssSize(0.5)};
    border-radius: 5px;
    border: ${theme.border.small};
    ${active && `border-color: ${theme.colors.main};`}
    ${active && `color: ${theme.colors.main};`}
  `,
);

export const RadioBox = styled.div<Props.CssProps>(
  ({ theme, active }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${cssSize(6)};
    height: ${cssSize(6)};
    margin-top: ${cssSize(0.5)};
    border-radius: 50%;
    border: ${theme.border.small};
    color: ${theme.colors.mainBg};
    ${active && `border-color: ${theme.colors.main};`}

    &::after {
      content: '';
      display: inline-block;
      width: ${cssSize(3)};
      height: ${cssSize(3)};
      border-radius: 50%;
      ${active && `background-color: ${theme.colors.main};`}
    }
  `,
);
