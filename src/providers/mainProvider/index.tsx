import type { ReactNode } from 'react'

import type { MainProvidersProps } from './types'

const MainProvider = ({ children }: MainProvidersProps): ReactNode => {
  return <>{children}</>
}

export default MainProvider
