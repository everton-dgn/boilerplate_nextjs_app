import Image from 'next/image'

import { CounterButton } from 'components/atoms/CounterButton'

import S from './styles.module.css'

const Home = () => (
  <div className={S.container}>
    <header className={S.header}>Boilerplate</header>
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
