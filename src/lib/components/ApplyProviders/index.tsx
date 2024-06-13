import isValidProp from '@emotion/is-prop-valid';
import { PropsWithChildren } from 'react';
import { StyleSheetManager, ThemeProvider } from 'styled-components';

import { ImagesProvider } from 'src/hooks/useImages';
import GlobalCSS from 'src/styles/global';
import { defaultTheme, defaultThemeDark } from 'src/styles/theme';
import { currentTheme } from 'src/utils/theme';

const ApplyProviders = (props: PropsWithChildren) => {
  return (
    <StyleSheetManager disableCSSOMInjection shouldForwardProp={isValidProp}>
      <ThemeProvider theme={currentTheme === 'light' ? defaultTheme : defaultThemeDark}>
        <GlobalCSS />
        <ImagesProvider>{props.children}</ImagesProvider>
      </ThemeProvider>
    </StyleSheetManager>
  );
};

export default ApplyProviders;
