import { ReactNode } from 'react'
import { render, RenderResult } from '@testing-library/react'
import { MainProvider } from 'ui/providers'
import userEvent from '@testing-library/user-event'

export const event = userEvent.setup({ delay: null })

const renderWithProviders = (children: ReactNode): RenderResult =>
  render(<MainProvider>{children}</MainProvider>)

export default renderWithProviders
