import { currenMainColor } from 'src/utils/theme';

import { antColors as ac, materialColors as mcolors } from './colors';
import { cssSize } from './utils';

export const defaultTheme: Styles.Theme = {
  colors: {
    ...currenMainColor,
    mainText: mcolors.grey['100'],
    bg1: ac.gray['100'],
    bg2: ac.gray['200'],
    bg3: ac.gray['300'],
    bg4: ac.gray['500'],
    text1: ac.gray['900'],
    text2: ac.gray['800'],
    text3: ac.gray['600'],
    text4: ac.gray['500'],
    gray: mcolors.grey['500'],
    yellow: ac.gold['600'],
    red: ac.red['800'],
    blue: ac.blue['500'],
    green: mcolors.lightGreen['800'],
    white: mcolors.grey['50'],
    black: mcolors.black,
  },
  fontSize: {
    h1: '1.5rem',
    h2: '1.35rem',
    h3: '1.25rem',
    h4: '1.15rem',
    h5: '1.1rem',
    h6: '1rem',
    body: '1rem',
    small: '0.95rem',
    verySmall: '0.9rem',
    label: '0.85rem',
  },
  shadow: {
    large: '0 1px 7px 0 #0007',
    medium: '0 1px 5px 0 #0005',
    small: '0 1px 3px 0 #0003',
  },
  border: {
    large: `solid 1px ${ac.gray['800']}`,
    medium: `solid 1px ${ac.gray['700']}`,
    small: `solid 1px ${ac.gray['600']}`,
  },
  radius: {
    large: cssSize(4),
    medium: cssSize(3),
    small: cssSize(2),
  },
};

export const defaultThemeDark = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    bg1: mcolors.black,
    bg2: ac.gray['900'],
    bg3: ac.gray['800'],
    bg4: ac.gray['800'],
    text1: ac.gray['500'],
    text2: ac.gray['600'],
    text3: ac.gray['700'],
    text4: ac.gray['800'],
    gray: ac.gray['600'],
    white: ac.gray['300'],
  },
  border: {
    large: `solid 1px ${ac.gray['800']}`,
    medium: `solid 1px ${ac.gray['900']}`,
    small: `solid 1px ${ac.gray['900']}`,
  },
};
