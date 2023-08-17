import styled from 'styled-components'
import T from 'ui/theme'

export const Grid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  padding: ${T.spacings.sm};
`

export const Header = styled.header`
  font-size: ${T.fonts.sizes.xxxl};
  font-weight: ${T.fonts.weights.semiBold};
  margin-bottom: ${T.spacings.xxl};
`

export const ContainerPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
