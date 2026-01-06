'use client'

import { useCallback, useState } from 'react'

import { useCount } from '@/hooks/useCount'

import { Button } from '../Button'

export const CounterButton = () => {
  const { count, increment } = useCount()
  const [error, setError] = useState<string | null>(null)

  const handleClick = useCallback(() => {
    try {
      setError(null)
      increment()
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Unknown error occurred'
      setError(`Failed to increment counter: ${errorMessage}`)
    }
  }, [increment])

  return (
    <>
      <Button
        aria-label={`COUNT: ${count}`}
        label={error ? `Error: ${error}` : `COUNT: ${count}`}
        onClick={handleClick}
      />
      {error && (
        <span role="alert" style={{ color: 'red', fontSize: '12px' }}>
          {error}
        </span>
      )}
    </>
  )
}
