import { GlobalStyles } from 'ui/globalStyles'
import { MainProvidersProps } from './types'

const MainProviders = ({ children }: MainProvidersProps) => (
  <>
    {children}
    <GlobalStyles />
  </>
)

export default MainProviders
