import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  description: 'Boilerplate Nextjs + React',
  title: 'Home Page'
}

const HomeLayout = ({ children }: { children: ReactNode }) => <>{children}</>

export default HomeLayout
