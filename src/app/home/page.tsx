'use client'

import { useState } from 'react'
import S from './styles.module.scss'
import * as C from 'app/components'
import { ReactComponent as LogoReact } from 'assets/images/logoReact.svg'
import Image from 'next/image'

export default function Home() {
  const [count, setCount] = useState(0)

  return (
    <main className={S.container}>
      <div className={S.wrapperImages}>
        <Image alt="Logo Nextjs" layout="fill" src="/images/logoNextjs.webp" />
        <LogoReact role="img" title="Logo React" />
      </div>
      <h1 className={S.title}>Nextjs + React</h1>
      <C.Button
        aria-label={`COUNT: ${count}`}
        onClick={() => setCount(prevState => prevState + 1)}
        text={`COUNT: ${count}`}
      />
    </main>
  )
}
