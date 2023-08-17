import Head from 'next/head'
import * as S from './styles'

export default function CustomError() {
  return (
    <>
      <Head>
        <title>Page not found</title>
      </Head>
      <S.Grid>
        <S.Header role="banner">Error!</S.Header>
        <S.Container>
          <S.Title>Page not found!</S.Title>
        </S.Container>
      </S.Grid>
    </>
  )
}
