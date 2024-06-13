import { createGlobalStyle, css } from 'styled-components';

import '../public/fonts/roboto500.woff2';
import '../public/fonts/roboto700.woff2';
import { cssSize, screenSize } from './utils';

export default createGlobalStyle(
  ({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
    }
    html {
      font-size: 16px;
    }
    body {
      font-size: ${theme.fontSize.body};
      min-height: 100vh;
    }
    html,
    body {
      font-family: 'Roboto', sans-serif;
      font-weight: normal;
      background-color: ${theme.colors.bg4};
      color: ${theme.colors.text4};
      overflow-x: hidden;
    }
    h1 {
      font-size: ${theme.fontSize.h1};
      font-weight: bolder;
    }
    h2 {
      font-size: ${theme.fontSize.h2};
      font-weight: bolder;
    }
    h3 {
      font-size: ${theme.fontSize.h3};
      font-weight: bolder;
    }
    h4 {
      font-size: ${theme.fontSize.h4};
    }
    h5 {
      font-size: ${theme.fontSize.h5};
    }
    h6 {
      font-size: ${theme.fontSize.h6};
    }
    p {
      font-size: ${theme.fontSize.body};
      line-height: 22px;
    }
    ul {
      list-style: none;
    }
    a {
      color: unset;
      text-decoration: underline;
    }
    em {
      font-style: normal;
      font-weight: normal;
      font-size: ${theme.fontSize.small};
    }
    mark {
      font-size: ${theme.fontSize.small};
    }
    small {
      font-size: ${theme.fontSize.small};
    }
    label > b {
      font-size: ${theme.fontSize.label};
    }
    button,
    select {
      min-height: ${cssSize(9)};
      display: flex;
      align-items: center;
      gap: ${cssSize(1)};
      padding: 0 ${cssSize(2)};
      background-color: transparent;
      outline: none;
      border: none;
      border-radius: ${theme.radius.small};
      cursor: pointer;
    }
    div::-webkit-scrollbar {
      width: ${cssSize(3)};
    }
    div::-webkit-scrollbar-track {
      background: #0000;
    }
    div::-webkit-scrollbar-thumb {
      background: ${theme.colors.gray};
      border-radius: 2px;
    }
    div::-webkit-scrollbar-thumb:hover {
      background: ${theme.colors.main};
    }
    #root {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    .custom-bg {
      fill: ${theme.colors.mainBg};
    }

    @media (max-width: ${screenSize.tablet}px) {
      html {
        font-size: 15px;
      }
    }
  `,
);
