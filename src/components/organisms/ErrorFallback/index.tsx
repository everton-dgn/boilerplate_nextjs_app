'use client'

import { Button } from '@/components/atoms/Button'

import S from './styles.module.css'
import type { ErrorFallbackProps } from './types'

const getErrorDisplayMessage = (
  error?: Error | null,
  errorMessage?: string
): string | null => {
  if (errorMessage) {
    return errorMessage
  }
  if (error?.message) {
    return error.message
  }
  return null
}

export const ErrorFallback = ({
  reset,
  error,
  errorMessage
}: ErrorFallbackProps) => {
  const displayMessage = getErrorDisplayMessage(error, errorMessage)

  return (
    <div className={S.grid}>
      <header className={S.header}>Error!</header>
      <main className={S.container}>
        <h1 className={S.title}>Something went wrong!</h1>
        {displayMessage && (
          <p
            role="alert"
            aria-live="polite"
            style={{ color: '#666', fontSize: '14px', marginBottom: '16px' }}
          >
            {displayMessage}
          </p>
        )}
        {reset && <Button label="Try again" onClick={reset} />}
      </main>
    </div>
  )
}
