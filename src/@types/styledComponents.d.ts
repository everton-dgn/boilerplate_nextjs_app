import T from 'ui/theme'

type Theme = typeof T

declare module 'styled-components' {
  export type DefaultTheme = Theme
}
