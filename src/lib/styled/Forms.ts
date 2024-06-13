import styled, { css } from 'styled-components';

import { animations, cssSize, screenSize } from 'src/styles/utils';

export const Form = styled.form<Props.CssProps>(
  () => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    gap: ${cssSize(6)};
    width: ${cssSize(200)};
    animation: ${animations.fadeUp} 0.5s ease-out;

    h1 {
      text-align: center;
      margin-bottom: ${cssSize(8)};
    }

    @media (max-width: ${screenSize.tablet}px) {
      width: 100%;
    }
  `,
);

export const FormLarge = styled(Form)(
  () => css`
    width: 100%;

    @media (max-width: ${screenSize.tablet}px) {
      width: 100%;
    }
  `,
);
