import { screen } from '@testing-library/react'
import { event } from 'tests/helpFunctions'
import { renderWithProviders } from 'tests/providers/component'

import { CounterButton } from '..'

const mockIncrement = vi.fn()
vi.mock('hooks/useCount', () => ({
  useCount: () => ({
    count: 0,
    increment: mockIncrement
  })
}))

describe('[Component] CounterButton', () => {
  it('should call a function once on click on the button', async () => {
    renderWithProviders(<CounterButton />)

    const btn = screen.getByRole('button', { name: /count:/i })
    await event().click(btn)

    expect(mockIncrement).toHaveBeenCalledTimes(1)
  })
})
