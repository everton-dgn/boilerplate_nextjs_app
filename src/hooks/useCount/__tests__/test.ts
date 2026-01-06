import { renderHooksProvider } from '@/tests/providers/hook'

import { act } from '@testing-library/react'

import { useCount } from '..'

describe('[Hook] useCount', () => {
  it('should increment when call count', async () => {
    const { result } = renderHooksProvider(() => useCount())

    expect(result.current.count).toBe(0)
    expect(result.current.error).toBeNull()

    act(() => result.current.increment())
    expect(result.current.count).toBe(1)

    act(() => result.current.increment())
    expect(result.current.count).toBe(2)
  })

  it('should reset count to zero', async () => {
    const { result } = renderHooksProvider(() => useCount())

    act(() => result.current.increment())
    act(() => result.current.increment())
    expect(result.current.count).toBe(2)

    act(() => result.current.reset())
    expect(result.current.count).toBe(0)
    expect(result.current.error).toBeNull()
  })

  it('should have error property initialized to null', () => {
    const { result } = renderHooksProvider(() => useCount())

    expect(result.current.error).toBeNull()
  })
})
