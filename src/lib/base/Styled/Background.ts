import styled, { css } from 'styled-components';

import { materialColors as mc } from 'src/styles/colors';

export const GradidentBg = styled.div(
  () => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, ${mc.deepOrange['100']}, ${mc.deepOrange['50']});
    background-size: 100% 100%;
    z-index: -1;
  `,
);
