import type { ReactNode } from 'react'

import { MainProvider } from '@/components/atoms/MainProvider'

import { type RenderResult, render } from '@testing-library/react'

export const renderWithProviders = (children: ReactNode): RenderResult =>
  render(<MainProvider>{children}</MainProvider>)
