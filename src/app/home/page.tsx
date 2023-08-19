'use client'

import { useState } from 'react'
import * as S from './styles'
import * as C from 'app/components'
import { ReactComponent as LogoReact } from 'assets/images/logoReact.svg'
import Image from 'next/image'
// import { Metadata } from 'next'

// export const metadata: Metadata = {
//   description: 'This is the home page',
//   title: 'Home Page'
// }

export default function Home() {
  const [count, setCount] = useState(0)

  return (
    <S.Container>
      <S.WrapperImages>
        <Image alt="Logo Nextjs" layout="fill" src="/images/logoNextjs.webp" />
        <LogoReact role="img" title="Logo React" />
      </S.WrapperImages>
      <S.Title>Nextjs + React</S.Title>
      <C.Button
        aria-label={`COUNT: ${count}`}
        onClick={() => setCount(prevState => prevState + 1)}
        text={`COUNT: ${count}`}
      />
    </S.Container>
  )
}
