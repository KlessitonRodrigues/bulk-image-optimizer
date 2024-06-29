import styled, { css } from 'styled-components';

import { animations, cssSize, screenSize } from 'src/styles/utils';

export const PageContainer = styled.div(
  () => css`
    width: 100%;
    height: 100%;
    z-index: 3;
  `,
);

export const PageContent = styled.div(
  () => css`
    width: 100%;
    height: 100%;
    margin: auto;
    margin-bottom: ${cssSize(10)};
    max-width: ${screenSize.laptopM}px;
    animation: 0.5s ${animations.fadeLeft} ease-out;
  `,
);

export const Section = styled.section(
  ({ theme }) => css`
    margin: ${cssSize(4)};
    font-size: ${theme.fontSize.h4};
    color: ${theme.colors.text2};
  `,
);

export const Card = styled.div(
  ({ theme }) => css`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${cssSize(6)};
    padding: ${cssSize(8)};
    background-color: ${theme.colors.bg1};
    color: ${theme.colors.text2};
    border-radius: ${theme.radius.medium};
    box-shadow: ${theme.shadow.small};
    transition: box-shadow 0.3s;

    &:hover {
      box-shadow: ${theme.shadow.medium};
    }
  `,
);

export const TransparentCard = styled(Card)(
  ({ theme }) => css`
    background-color: ${theme.colors.bg1}dd;
    backdrop-filter: blur(3px);
  `,
);

export const Box = styled.div<Props.CssProps>(
  ({ theme, w, maxw, responsive }) => css`
    width: ${w ?? '100%'};
    max-width: ${maxw ?? '100%'};
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: ${cssSize(2)};
    padding: ${cssSize(4)};
    border: ${theme.border.small};
    border-radius: ${theme.radius.small};

    @media (max-width: ${screenSize.laptopS}px) {
      ${responsive && 'max-width: 100%;'}
    }
  `,
);

export const Space = styled.div<Props.CssProps>(
  ({ m, mt, mb, p }) => css`
    margin: ${m ?? 0};
    padding: ${p ?? 0};
    margin-top: ${mt ?? 0};
    margin-bottom: ${mb ?? 0};
  `,
);
