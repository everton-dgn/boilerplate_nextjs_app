import { type MainProvidersProps } from './types'
import { type ReactNode } from 'react'

const MainProvider = ({ children }: MainProvidersProps): ReactNode => {
  return <>{children}</>
}

export default MainProvider
