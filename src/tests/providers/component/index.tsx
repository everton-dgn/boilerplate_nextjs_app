import type { ReactNode } from 'react'

import { type RenderResult, render } from '@testing-library/react'

import { MainProvider } from 'components/atoms/MainProvider'

export const renderWithProviders = (children: ReactNode): RenderResult =>
  render(<MainProvider>{children}</MainProvider>)
