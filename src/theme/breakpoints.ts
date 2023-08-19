import windowSizes from './windowSizes'

const device = (value: number) => `@media screen and (min-width: ${value}px)`

const breakpoints = {
  custom: (width: number) => device(width),
  desktop: device(windowSizes.lg),
  mobile: device(windowSizes.sm),
  tablet: device(windowSizes.md)
}

export default breakpoints
