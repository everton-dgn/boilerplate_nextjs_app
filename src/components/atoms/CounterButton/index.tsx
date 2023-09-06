'use client'

import useCount from 'hooks/useCount'
import Button from 'components/atoms/Button'

const CounterButton = () => {
  const { count, increment } = useCount()

  return (
    <Button
      aria-label={`COUNT: ${count}`}
      label={`COUNT: ${count}`}
      onClick={increment}
    />
  )
}

export default CounterButton
