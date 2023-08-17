import { ButtonHTMLAttributes } from 'react'

export type BtnProps = {
  text: string
} & ButtonHTMLAttributes<HTMLButtonElement>
