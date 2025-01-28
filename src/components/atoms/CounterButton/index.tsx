'use client'

import { useCount } from 'hooks/useCount'

import { Button } from '../Button'

export const CounterButton = () => {
  const { count, increment } = useCount()

  return (
    <Button
      aria-label={`COUNT: ${count}`}
      label={`COUNT: ${count}`}
      onClick={increment}
    />
  )
}
