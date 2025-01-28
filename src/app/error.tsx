'use client'

import { useRouter } from 'next/navigation'

import { ErrorFallback } from 'components/organisms/ErrorFallback'

const ErrorPage = () => {
  const { replace } = useRouter()

  return <ErrorFallback reset={() => replace('/')} />
}

export default ErrorPage
