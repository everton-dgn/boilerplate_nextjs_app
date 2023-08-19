import { css } from 'styled-components'
import colors from './colors'

const focus = css`
  outline: 4px solid ${colors.focus};
  outline-offset: 1px;
`

const states = {
  focus
}

export default states
