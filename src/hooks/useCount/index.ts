import { useState } from 'react'
import { type UseCount } from './types'

const useCount = (): UseCount => {
  const [count, setCount] = useState(0)
  const increment = (): void => {
    setCount(count + 1)
  }
  return { count, increment }
}

export default useCount
