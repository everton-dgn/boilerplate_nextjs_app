'use client'

import { useRouter } from 'next/navigation'
import { useCallback } from 'react'

import { ErrorFallback } from '@/components/organisms/ErrorFallback'

const ErrorPage = () => {
  const router = useRouter()

  const handleReset = useCallback(() => {
    try {
      router.replace('/')
    } catch {
      // Fallback: attempt window location redirect if router fails
      if (typeof window !== 'undefined') {
        window.location.href = '/'
      }
    }
  }, [router])

  return <ErrorFallback reset={handleReset} />
}

export default ErrorPage
