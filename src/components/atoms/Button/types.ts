import { ButtonHTMLAttributes } from 'react'

export type BtnProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string
}
