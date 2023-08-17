import { createGlobalStyle } from 'styled-components'
import T from 'ui/theme'

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale !important;
    list-style: none !important;
    outline: none;
    font-family: ${T.fonts.family};
    line-height: calc(1em + 0.5rem);

    @media (prefers-reduced-motion) {
      transition: none!important;
      animation-duration: 0ms!important;
    }
  }

  html {
    font-size: 62.5%;
  }

  #__next {
    background-image: linear-gradient(45deg, ${T.colors.dark}, ${T.colors.secondary}, ${T.colors.primary});
    color: ${T.colors.white};
  }

  p, h1, h2, h3, h4, h5, h6 {
    word-break: break-word;
  }

  #__next,
  body,
  input,
  select,
  textarea,
  button {
    font: ${T.fonts.weights.medium} ${T.fonts.sizes.xs} Inter, sans-serif;
    font-family: ${T.fonts.family};
  }

  button {
    cursor: pointer;
    border: none;
    border-radius: ${T.borderRadius.sm};
  }

  #__next {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-height: 100vh;
    isolation: isolate;
  }

  a,
  a:active {
    color: inherit;
    text-decoration: none;
  }

  ::-webkit-scrollbar,
  scrollbar-width {
    width: 16px !important;
    background-color: ${T.colors.white};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${T.colors.gray};
    border-radius: 20px;
    border: 3px solid ${T.colors.white};
  }

  :root {
    scrollbar-color: ${T.colors.gray} ${T.colors.white} !important;
    scrollbar-width: 16px !important;
  }
`

export default GlobalStyles
