'use client'

import { Button } from 'components/atoms/Button'

import S from './styles.module.css'

import type { ErrorFallbackProps } from './types'

export const ErrorFallback = ({ reset }: ErrorFallbackProps) => (
  <div className={S.grid}>
    <header className={S.header}>Error!</header>
    <main className={S.container}>
      <h1 className={S.title}>Page not found!</h1>
      <Button label="Try again" onClick={reset} />
    </main>
  </div>
)
