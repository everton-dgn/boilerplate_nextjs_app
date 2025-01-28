'use client'

import S from './styles.module.css'

import type { ButtonProps } from './types'

export const Button = ({ label, ...props }: ButtonProps) => (
  <button className={S.button} {...props}>
    {label}
  </button>
)
