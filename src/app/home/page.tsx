'use client'

import { useState } from 'react'
import Image from 'next/image'
import * as C from 'app/components'
import { ReactComponent as LogoReact } from 'assets/images/logoReact.svg'
import S from './styles.module.scss'

export default function Home() {
  const [count, setCount] = useState(0)

  return (
    <main className={S.container}>
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
      <C.Button
        aria-label={`COUNT: ${count}`}
        onClick={() => setCount(prevState => prevState + 1)}
        text={`COUNT: ${count}`}
      />
    </main>
  )
}
