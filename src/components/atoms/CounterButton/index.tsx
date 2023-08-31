'use client'

import useCount from 'hooks/useCount'
import Button from 'components/atoms/Button'

const CounterButton = () => {
  const { count, increment } = useCount()

  return (
    <Button
      aria-label={`COUNT: ${count}`}
      onClick={increment}
      text={`COUNT: ${count}`}
    />
  )
}

export default CounterButton
