import * as S from './styles'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Error Page'
}

export default function CustomError() {
  return (
    <S.Grid>
      <S.Header role="banner">Error!</S.Header>
      <S.Container>
        <S.Title>Page not found!</S.Title>
      </S.Container>
    </S.Grid>
  )
}
