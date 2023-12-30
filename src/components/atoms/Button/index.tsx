import S from './styles.module.scss'

import type { ButtonProps } from './types'

const Button = ({ label, ...props }: ButtonProps) => (
  <button className={S.button} {...props}>
    {label}
  </button>
)

export default Button
