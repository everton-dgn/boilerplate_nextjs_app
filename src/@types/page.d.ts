import { ComponentType, ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'

export type Page<P = object> = NextPage<P> & {
  Template?: ComponentType
  getTemplate?: (page: ReactElement) => ReactNode
}
