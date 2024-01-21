'use client'

import { useRouter } from 'next/navigation'

import { Error } from 'components/organisms'

const NotFound = () => {
  const { replace } = useRouter()

  return <Error reset={() => replace('/')} />
}

export default NotFound
