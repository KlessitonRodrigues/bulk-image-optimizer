import styled, { css } from 'styled-components';

import { cssSize } from 'src/styles/utils';

export const Image = styled.img<Props.CssProps>(
  ({ theme, w, h }) => css`
    display: block;
    margin: auto;
    width: 100%;
    padding: ${cssSize(1)};
    max-height: ${h ?? '100%'};
    max-width: ${w ?? 'auto'};
    border-radius: ${theme.border.medium};
    overflow: hidden;
  `,
);

export const PreviewImage = styled.img<Props.CssProps>(
  ({ theme, w, h }) => css`
    display: block;
    margin: auto;
    width: 100%;
    padding: ${cssSize(1)};
    max-height: ${h ?? '100%'};
    max-width: ${w ?? 'auto'};
    border-radius: ${theme.border.medium};
    overflow: hidden;
  `,
);

export const Canvas = styled.canvas<Props.CssProps>(
  ({ theme }) => css`
    width: 100%;
    max-width: ${cssSize(150)};
    max-height: ${cssSize(150)};
    border-radius: ${theme.radius.medium};
  `,
);
