import { act } from '@testing-library/react'
import { renderHooksProvider } from 'tests/providers/hook'

import { useCount } from '..'

describe('[Hook] useCount', () => {
  it('should increment wnhen call count', async () => {
    const { result } = renderHooksProvider(() => useCount())

    expect(result.current.count).toBe(0)

    await act(() => result.current.increment())
    expect(result.current.count).toBe(1)

    await act(() => result.current.increment())
    expect(result.current.count).toBe(2)
  })
})
