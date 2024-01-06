import { screen } from '@testing-library/react'

import { renderWithProviders } from 'testHelpers/providerComponent'
import { event } from 'testHelpers/helpFunctions'

import { CounterButton } from '..'

const mockIncrement = vi.fn()
vi.mock('hooks', () => ({
  useCount: () => ({
    count: 0,
    increment: mockIncrement
  })
}))

describe('[Component] Button', () => {
  it('should call a function once on click on the button', async () => {
    renderWithProviders(<CounterButton />)

    const btn = screen.getByRole('button', { name: /count:/i })
    await event().click(btn)

    expect(mockIncrement).toHaveBeenCalledTimes(1)
  })
})
