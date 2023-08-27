import S from './styles.module.scss'
import { DefaultProps } from './types'

const DefaultTemplate = ({ children }: DefaultProps) => (
  <div className={S.grid}>{children}</div>
)

export default DefaultTemplate
