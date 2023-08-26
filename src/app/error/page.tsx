import S from './styles.module.scss'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Error Page'
}

export default function CustomError() {
  return (
    <div className={S.grid}>
      <header className={S.header} role="banner">
        Error!
      </header>
      <main className={S.container}>
        <h1 className={S.title}>Page not found!</h1>
      </main>
    </div>
  )
}
