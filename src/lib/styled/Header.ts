import styled, { css } from 'styled-components';

import { cssSize, screenSize } from 'src/styles/utils';

export const HeaderContainer = styled.div(
  ({ theme }) => css`
    width: 100%;
    padding: ${cssSize(4)};
    margin-bottom: ${cssSize(4)};
    background-color: ${theme.colors.mainBg};
    color: ${theme.colors.mainText};
    box-shadow: ${theme.shadow.large};
  `,
);

export const HeaderContent = styled.div(
  () => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    width: 100%;
    max-width: ${screenSize.laptopM}px;
  `,
);
