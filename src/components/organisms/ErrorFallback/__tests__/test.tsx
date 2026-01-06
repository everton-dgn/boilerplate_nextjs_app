import { renderWithProviders } from '@/tests/providers/component'

import { screen } from '@testing-library/react'

import { ErrorFallback } from '..'

describe('[Component] ErrorFallback', () => {
  it('should display error header and title', () => {
    renderWithProviders(<ErrorFallback reset={vi.fn()} />)

    const heading = screen.getByRole('banner')
    const title = screen.getByRole('heading', {
      name: 'Something went wrong!'
    })

    expect(heading).toHaveTextContent('Error!')
    expect(title).toBeInTheDocument()
  })

  it('should display custom error message when provided', () => {
    const errorMessage = 'Test error message'
    renderWithProviders(
      <ErrorFallback reset={vi.fn()} errorMessage={errorMessage} />
    )

    const alert = screen.getByRole('alert')
    expect(alert).toHaveTextContent(errorMessage)
  })

  it('should display error object message when provided', () => {
    const error = new Error('Error object message')
    renderWithProviders(<ErrorFallback reset={vi.fn()} error={error} />)

    const alert = screen.getByRole('alert')
    expect(alert).toHaveTextContent('Error object message')
  })

  it('should not display error message when not provided', () => {
    renderWithProviders(<ErrorFallback reset={vi.fn()} />)

    const alert = screen.queryByRole('alert')
    expect(alert).not.toBeInTheDocument()
  })

  it('should not display try again button when reset is not provided', () => {
    renderWithProviders(<ErrorFallback />)

    const button = screen.queryByRole('button', { name: 'Try again' })
    expect(button).not.toBeInTheDocument()
  })
})
