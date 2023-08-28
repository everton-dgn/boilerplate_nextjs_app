import { ReactNode } from 'react'
import { render, RenderResult } from '@testing-library/react'
import MainProvider from 'providers/mainProviders'

const renderWithProviders = (children: ReactNode): RenderResult =>
  render(<MainProvider>{children}</MainProvider>)

export default renderWithProviders
