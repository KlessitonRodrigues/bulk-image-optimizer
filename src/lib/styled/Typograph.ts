import styled, { css } from 'styled-components';

import { cssSize } from 'src/styles/utils';

export const VerySmall = styled.span<Props.CssProps>(
  () => css`
    font-size: ${cssSize(4)};
  `,
);
