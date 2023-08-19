import borderRadius from './borderRadius'
import grids from './grids'
import zIndex from './zIndex'
import animations from './animations'
import breakpoints from './breakpoints'
import boxShadows from './boxShadows'
import colors from './colors'
import spacings from './spacings'
import fonts from './fonts'
import windowSizes from './windowSizes'
import states from './states'

const T = {
  animations,
  borderRadius,
  boxShadows,
  breakpoints,
  colors,
  fonts,
  grids,
  spacings,
  states,
  windowSizes,
  zIndex
} as const

export default T
