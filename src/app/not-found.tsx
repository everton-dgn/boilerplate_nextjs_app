'use client'

import { useRouter } from 'next/navigation'

import { ErrorFallback } from 'components/organisms/ErrorFallback'

const NotFound = () => {
  const { replace } = useRouter()

  return <ErrorFallback reset={() => replace('/')} />
}

export default NotFound
