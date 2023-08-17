import * as S from './styles'
import { DefaultProps } from './types'

const DefaultTemplate = ({ children }: DefaultProps) => (
  <S.Grid>
    <S.Header role="banner">Boilerplate</S.Header>
    <S.ContainerPage>{children}</S.ContainerPage>
  </S.Grid>
)

export default DefaultTemplate
