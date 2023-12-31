import { screen } from '@testing-library/react'

import { renderWithProviders } from 'testHelpers/providerComponent'

import { Error } from '..'

describe('[Component] CustomError', () => {
  it('should the following section title: Page not found!', () => {
    renderWithProviders(<Error reset={vi.fn()} />)

    const heading = screen.getByRole('banner')
    const title = screen.getByRole('heading', {
      name: 'Page not found!'
    })

    expect(heading).toHaveTextContent('Error!')
    expect(title).toBeInTheDocument()
  })
})
