import { screen } from '@testing-library/react'
import renderWithProviders from 'testHelpers/providers/components'
import DefaultTemplate from '..'

describe('[Component] DefaultTemplate', () => {
  it('should render a children and a title', () => {
    renderWithProviders(
      <DefaultTemplate>
        <p data-testid="select_template">Test Template</p>
      </DefaultTemplate>
    )
    const children = screen.getByTestId('select_template')
    expect(children).toBeInTheDocument()
  })
})
