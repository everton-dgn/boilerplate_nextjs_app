import { useCallback, useState } from 'react'

import type { UseCount } from './types'

const MAX_COUNT = Number.MAX_SAFE_INTEGER

export const useCount = (): UseCount => {
  const [count, setCount] = useState(0)
  const [error, setError] = useState<string | null>(null)

  const increment = useCallback((): void => {
    try {
      setError(null)
      setCount(prevCount => {
        if (prevCount >= MAX_COUNT) {
          throw new Error('Counter has reached maximum safe value')
        }
        return prevCount + 1
      })
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Failed to increment counter'
      setError(errorMessage)
    }
  }, [])

  const reset = useCallback((): void => {
    try {
      setCount(0)
      setError(null)
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Failed to reset counter'
      setError(errorMessage)
    }
  }, [])

  return { count, increment, reset, error }
}
