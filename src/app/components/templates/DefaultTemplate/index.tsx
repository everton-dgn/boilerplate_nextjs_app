import S from './styles.module.scss'
import { DefaultProps } from './types'

const DefaultTemplate = ({ children }: DefaultProps) => (
  <div className={S.grid}>
    <header className={S.header} role="banner">
      Boilerplate
    </header>
    <div className={S.containerPage}>{children}</div>
  </div>
)

export default DefaultTemplate
