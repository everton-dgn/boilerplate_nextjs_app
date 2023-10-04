import type { ButtonProps } from './types'
import S from './styles.module.scss'

const Button = ({ label, ...props }: ButtonProps) => (
  <button className={S.button} {...props}>
    {label}
  </button>
)

export default Button
