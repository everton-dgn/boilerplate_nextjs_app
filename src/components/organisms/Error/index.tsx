import S from './styles.module.scss'
import Button from 'components/atoms/Button'
import type { ErrorProps } from './types'

const Error = ({ reset }: ErrorProps) => (
  <div className={S.grid}>
    <header className={S.header} role="banner">
      Error!
    </header>
    <main className={S.container}>
      <h1 className={S.title}>Page not found!</h1>
      <Button label="Try again" onClick={reset} />
    </main>
  </div>
)

export default Error
