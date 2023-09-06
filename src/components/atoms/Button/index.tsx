import { BtnProps } from './types'
import S from './styles.module.scss'

const Button = ({ label, ...props }: BtnProps) => (
  <button className={S.button} {...props}>
    {label}
  </button>
)

export default Button
