import type { ReactNode } from 'react'

import type { MainProvidersProps } from './types'

export const MainProvider = ({ children }: MainProvidersProps): ReactNode => {
  return <>{children}</>
}
