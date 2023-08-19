'use client'

import * as C from 'app/components'
import { LayoutProps } from './types'

export default function Layout({ children }: LayoutProps) {
  return <C.DefaultTemplate>{children}</C.DefaultTemplate>
}
