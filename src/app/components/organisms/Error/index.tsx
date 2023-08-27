import S from './styles.module.scss'
import Button from '../../atoms/Button'
import { ErrorProps } from './types'

const Error = ({ reset }: ErrorProps) => (
  <div className={S.grid}>
    <header className={S.header} role="banner">
      Error!
    </header>
    <main className={S.container}>
      <h1 className={S.title}>Page not found!</h1>
      <Button onClick={reset} text="Try again" />
    </main>
  </div>
)

export default Error
