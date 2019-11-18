import { createGlobalStyle } from 'styled-components';

import gilroyLightWoff from '@assets/fonts/Gilroy-Light.woff';
import gilroyLightWoff2 from '@assets/fonts/Gilroy-Light.woff2';
import gilroyLightTtf from '@assets/fonts/Gilroy-Light.ttf';

import gilroyUltraLightWoff from '@assets/fonts/Gilroy-UltraLight.woff';
import gilroyUltraLightWoff2 from '@assets/fonts/Gilroy-UltraLight.woff2';
import gilroyUltraLightTtf from '@assets/fonts/Gilroy-UltraLight.ttf';

import gilroyRegularWoff from '@assets/fonts/Gilroy-Regular.woff';
import gilroyRegularWoff2 from '@assets/fonts/Gilroy-Regular.woff2';
import gilroyRegularTtf from '@assets/fonts/Gilroy-Regular.ttf';

import gilroyMediumWoff from '@assets/fonts/Gilroy-Medium.woff';
import gilroyMediumWoff2 from '@assets/fonts/Gilroy-Medium.woff2';
import gilroyMediumTtf from '@assets/fonts/Gilroy-Medium.ttf';

import gilroyBoldWoff from '@assets/fonts/Gilroy-Bold.woff';
import gilroyBoldWoff2 from '@assets/fonts/Gilroy-Bold.woff2';
import gilroyBoldTtf from '@assets/fonts/Gilroy-Bold.ttf';

import gilroyBlackWoff from '@assets/fonts/Gilroy-Black.woff';
import gilroyBlackWoff2 from '@assets/fonts/Gilroy-Black.woff2';
import gilroyBlackTtf from '@assets/fonts/Gilroy-Black.ttf';


export const ThemeStyles = createGlobalStyle`
  :root {
    --font-family: 'gilroy', 'Trebuchet MS', 'Tahoma', 'Arial', 'sans-serif';
    --font: normal 500 16px/24px var(--font-family);
    --color-primary-1: #3172FD;
    --color-primary-1-tint-1: rgba(14,14,14,.3);
    --color-secondary-1: #0E0E0E;
    --color-secondary-1-tint-1: rgba(14,14,14,.3);
  }

  body {
    font: var(--font);
    color: var(--color-secondary);
    letter-spacing: 0.5px;
  }

  *:before, &:after {
    color: var(--color-secondary);
  }

  h1 {
    font-size: 38px;
    font-weight: 500;
    line-height: 38px;
    letter-spacing: 1px;
    margin-bottom: 32px;
    white-space: nowrap;
  }

  h2 {
    font-size: 24px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.5px;
    margin-bottom: 20px;
    white-space: nowrap;
    &.centered {
        text-align: center;
        font-weight: 600;
    }
  }

  h3 {
    font-size: 16px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0.5px;
    margin-bottom: 20px;
    white-space: nowrap;
  }

  p, pre, a, span, li, input, textarea, text, select, option {
    font-weight: 500;
    &, b, i {
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.5px;
    }
  }

  button, input[type="button"] {
    font-size: 16px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0.5px;
    height: 52px;
    width: 250px;
    &[disabled="true"], &[disabled] {
        background: var(--color-primary-1-tint-1);
        color: #fff;
        cursor: no-drop;
        &:hover {
            background: var(--color-primary-1-tint-1);
            color: #fff;
        }
    }
  }

  input, button, textarea, pre {
    font-family: var(--font-family);
  }

  input[type="password"] {
    font: small-caption;
    font-size: 21px;
    letter-spacing: 2px;
  }

  input::placeholder, textarea::placeholder {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.5px;
    color: var(--color-secondary-1-tint-1);
  }

  section.section-1,
  section.section-2,
  section.section-3 {
    &.no-offset {
        margin-bottom: unset;
    }
    &.no-padding {
        padding: unset;
    }
  }

  .section-1 {
    margin: 0 auto 80px;
    padding: 60px 43px;
    height: auto;
    background: white;
    box-shadow: 0 8px 21px 0 rgba(0, 0, 0, 0.05);
    border-radius: 15px;
  }

  .section-2 {
    padding: 40px 40px 60px;
    margin-bottom: 30px;
    border-radius: 3px;
  }
  .section-3 {
    padding: 40px 40px 60px;
    margin-bottom: 60px;
  }

  @font-face {
    font-family: 'gilroy';
    src: url(${gilroyLightWoff2}) format('woff2'),
        url(${gilroyLightWoff}) format('woff'),
        url(${gilroyLightTtf}) format('truetype');
    font-weight: 200;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'gilroy';
    src: url(${gilroyUltraLightWoff2}) format('woff2'),
        url(${gilroyUltraLightWoff}) format('woff'),
        url(${gilroyUltraLightTtf}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'gilroy';
    src: url(${gilroyRegularWoff2}) format('woff2'),
        url(${gilroyRegularWoff}) format('woff'),
        url(${gilroyRegularTtf}) format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'gilroy';
    src: url(${gilroyMediumWoff2}) format('woff2'),
        url(${gilroyMediumWoff}) format('woff'),
        url(${gilroyMediumTtf}) format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'gilroy';
    src: url(${gilroyBoldWoff2}) format('woff2'),
        url(${gilroyBoldWoff}) format('woff'),
        url(${gilroyBoldTtf}) format('truetype');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'gilroy';
    src: url(${gilroyBlackWoff2}) format('woff2'),
        url(${gilroyBlackWoff}) format('woff'),
        url(${gilroyBlackTtf}) format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
`;
