'use client'

import Button from 'components/atoms/Button'

import useCount from 'hooks/useCount'

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
