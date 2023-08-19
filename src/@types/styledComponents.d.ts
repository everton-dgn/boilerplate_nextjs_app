import T from 'theme'

type Theme = typeof T

declare module 'styled-components' {
  export type DefaultTheme = Theme
}
