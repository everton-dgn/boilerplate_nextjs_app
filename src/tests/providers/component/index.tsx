import type { ReactNode } from 'react'

import { type RenderResult, render } from '@testing-library/react'

import { MainProvider } from 'providers/mainProvider'

export const renderWithProviders = (children: ReactNode): RenderResult =>
  render(<MainProvider>{children}</MainProvider>)
