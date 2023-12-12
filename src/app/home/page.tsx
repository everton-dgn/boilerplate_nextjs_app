import Image from 'next/image'
import S from './styles.module.scss'
import CounterButton from 'components/atoms/CounterButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description: 'Boilerplate Nextjs + React',
  title: 'Home Page'
}

const Home = () => (
  <div className={S.container}>
    <header className={S.header} role="banner">
      Boilerplate
    </header>
    <main className={S.main}>
      <div className={S.wrapper_images}>
        <Image
          alt="Logo Nextjs"
          height={77}
          priority
          src="/images/logo_nextjs.webp"
          width={77}
        />
        <Image
          alt="Logo React"
          height={77}
          priority
          src="/images/logo_react.svg"
          width={87}
        />
      </div>
      <h1 className={S.title}>Nextjs + React</h1>
      <CounterButton />
    </main>
  </div>
)

export default Home
