import { renderHooksProvider } from '@/tests/providers/hook'

import { act } from '@testing-library/react'

import { useCount } from '..'

describe('[Hook] useCount', () => {
  it('should increment wnhen call count', async () => {
    const { result } = renderHooksProvider(() => useCount())

    expect(result.current.count).toBe(0)

    act(() => result.current.increment())
    expect(result.current.count).toBe(1)

    act(() => result.current.increment())
    expect(result.current.count).toBe(2)
  })
})
