import type { ReactNode } from 'react'

import { MainProvider } from '@/components/atoms/MainProvider'

import { type RenderHookResult, renderHook } from '@testing-library/react'

import type { RenderHooksProviderProps, WrapperProps } from './types'

const wrapper = ({ children }: WrapperProps): ReactNode => (
  <MainProvider>{children}</MainProvider>
)

export const renderHooksProvider = (
  children: RenderHooksProviderProps
): RenderHookResult<any, any> => {
  return renderHook(children, { wrapper })
}
