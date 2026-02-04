import type { ReactNode } from 'react'

import { MainProvider } from '@/components/atoms/MainProvider'

import { type RenderHookResult, renderHook } from '@testing-library/react'

import type { WrapperProps } from './types'

const wrapper = ({ children }: WrapperProps): ReactNode => (
  <MainProvider>{children}</MainProvider>
)

export const renderHooksProvider = <T,>(
  callback: () => T
): RenderHookResult<T, unknown> => {
  return renderHook(callback, { wrapper })
}
