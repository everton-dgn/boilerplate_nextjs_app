'use client'

import { useState } from 'react'
import Image from 'next/image'
import Button from 'components/atoms/Button'
import { ReactComponent as LogoReact } from 'assets/images/logoReact.svg'
import S from './styles.module.scss'

export default function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className={S.container}>
      <header className={S.header} role="banner">
        Boilerplate
      </header>
      <main className={S.main}>
        <div className={S.wrapperImages}>
          <Image
            alt="Logo Nextjs"
            height={77}
            priority
            src="/images/logoNextjs.webp"
            width={77}
          />
          <LogoReact role="img" title="Logo React" />
        </div>
        <h1 className={S.title}>Nextjs + React</h1>
        <Button
          aria-label={`COUNT: ${count}`}
          onClick={() => setCount(prevState => prevState + 1)}
          text={`COUNT: ${count}`}
        />
      </main>
    </div>
  )
}
