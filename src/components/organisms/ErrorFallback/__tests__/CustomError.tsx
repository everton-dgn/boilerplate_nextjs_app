import { screen } from '@testing-library/react'
import { renderWithProviders } from 'tests/providers/component'

import { ErrorFallback } from '..'

describe('[Component] ErrorFallback', () => {
  it('should the following section title: Page not found!', () => {
    renderWithProviders(<ErrorFallback reset={vi.fn()} />)

    const heading = screen.getByRole('banner')
    const title = screen.getByRole('heading', {
      name: 'Page not found!'
    })

    expect(heading).toHaveTextContent('Error!')
    expect(title).toBeInTheDocument()
  })
})
