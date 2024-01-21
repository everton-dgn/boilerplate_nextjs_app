'use client'

import { useRouter } from 'next/navigation'

import { Error as ErrorComponent } from 'components/organisms'

const Error = () => {
  const { replace } = useRouter()

  return <ErrorComponent reset={() => replace('/')} />
}

export default Error
