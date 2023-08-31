import { screen } from '@testing-library/react'
import renderWithProviders from 'testHelpers/providers/components'
import event from 'testHelpers/providers/helpFunctions'
import CounterButton from '..'

const mockIncrement = jest.fn()
jest.mock('hooks/useCount', () => ({
  __esModule: true,
  default: () => ({
    count: 0,
    increment: mockIncrement
  })
}))

describe('[Component] Button', () => {
  it('should call a function once on click on the button', async () => {
    renderWithProviders(<CounterButton />)

    const btn = screen.getByRole('button', { name: /count:/i })
    await event.click(btn)

    expect(mockIncrement).toHaveBeenCalledTimes(1)
  })
})
