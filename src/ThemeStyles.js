import { createGlobalStyle } from 'styled-components';


export const ThemeStyles = createGlobalStyle`
  :root {
    --font-family: 'gilroy', 'Trebuchet MS', 'Tahoma', 'Arial', 'sans-serif';
    --font: normal 500 16px/24px var(--font-family);
    --color-primary-1: #5466EF;
    --color-primary-1-tint-1: rgba(14,14,14,.3);
    --color-secondary-1: #0E0E0E;
    --color-secondary-1-tint-1: rgba(14,14,14,.3);
    --color-error: rgb(242, 109, 109);
    --color-disabled: #BABABA;
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
    font-size: 24px;
    font-weight: 400;
    line-height: 38px;
    letter-spacing: 1px;
    margin-bottom: 18px;
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
    padding-top: 0;
    &::placeholder {
      font: var(--font);
    }
  }

  input::placeholder, textarea::placeholder {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.5px;
    color: var(--color-secondary-1-tint-1);
  }

  th {
    font-weight: 500;
  }

  section.section-1,
  section.section-2,
  section.section-3 {
    &.no-margin {
        margin-bottom: unset;
    }
    &.no-padding {
        padding: unset;
    }
  }

  .section-1 {
    margin: 0 auto 50px;
    height: auto;
    background: white;
    box-shadow: 0px 15px 20px rgba(150, 150, 187, 0.09);
    border-radius: 13px;
    overflow: hidden;
  }

  .section-2 {
    padding: 40px 40px 60px;
    margin-bottom: 30px;
    border-radius: 3px;
  }
  .section-3 {
    padding: 40px 40px 60px;
    margin-bottom: 20px;
  }
`;
