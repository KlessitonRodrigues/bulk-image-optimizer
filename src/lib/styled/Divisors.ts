import styled, { css } from 'styled-components';

import { animations, cssSize } from 'src/styles/utils';

export const Hr = styled.hr<Props.CssProps>(
  ({ theme, m, active }) => css`
    width: 100%;
    margin: ${m ?? 0};
    margin: ${cssSize(2)} 0;
    border-bottom: ${theme.border.small};
    animation: ${animations.fullWidth} 0s;
    animation-duration: ${active ? '0.9s' : 0};
  `,
);
