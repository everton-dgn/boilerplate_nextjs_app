import { screen } from '@testing-library/react'
import { renderWithProviders } from 'testHelpers/providers'
import DefaultTemplate from '..'

describe('[Template] DefaultTemplate', () => {
  it('should render a children and a title', () => {
    renderWithProviders(
      <DefaultTemplate>
        <p data-testid="select_template">Test Template</p>
      </DefaultTemplate>
    )

    const title = screen.getByRole('banner')
    const children = screen.getByTestId('select_template')

    expect(children).toBeInTheDocument()
    expect(title).toHaveTextContent('Boilerplate')
  })
})
