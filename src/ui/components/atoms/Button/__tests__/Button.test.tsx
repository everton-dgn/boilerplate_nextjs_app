import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithProviders } from 'testHelpers/providers'
import Button from '..'

describe('[Component] Button', () => {
  const user = userEvent.setup({ delay: null })

  it('should call a function once on click on the button', async () => {
    const onClick = jest.fn()
    renderWithProviders(<Button onClick={onClick} text="Mais Informações" />)

    const btn = screen.getByRole('button', { name: /Mais Informações/i })
    await user.click(btn)

    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
