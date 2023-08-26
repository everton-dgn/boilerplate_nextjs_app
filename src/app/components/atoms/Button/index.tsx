import { BtnProps } from './types'
import S from './styles.module.scss'

const Button = ({ text, ...props }: BtnProps) => (
  <button className={S.button} {...props}>
    {text}
  </button>
)

export default Button
