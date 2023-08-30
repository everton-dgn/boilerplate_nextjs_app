import { screen } from '@testing-library/react'
import renderWithProviders from 'testHelpers/providers/components'
import Error from '..'

describe('[Page] CustomError', () => {
  it('should the following section title: Page not found!', () => {
    renderWithProviders(<Error reset={jest.fn()} />)

    const heading = screen.getByRole('banner')
    const title = screen.getByRole('heading', {
      name: 'Page not found!'
    })

    expect(heading).toHaveTextContent('Error!')
    expect(title).toBeInTheDocument()
  })
})
