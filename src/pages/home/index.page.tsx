import { useState } from 'react'
import Head from 'next/head'
import * as S from './styles'
import * as C from 'ui/components'
import { ReactComponent as LogoReact } from 'ui/assets/images/logoReact.svg'
import Image from 'next/image'

export default function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <S.Container>
        <S.WrapperImages>
          <Image
            alt="Logo Nextjs"
            layout="fill"
            src="/images/logoNextjs.webp"
          />
          <LogoReact role="img" title="Logo React" />
        </S.WrapperImages>
        <S.Title>Nextjs + React</S.Title>
        <C.Button
          aria-label={`COUNT: ${count}`}
          onClick={() => setCount(prevState => prevState + 1)}
          text={`COUNT: ${count}`}
        />
      </S.Container>
    </>
  )
}

Home.Template = C.DefaultTemplate
