'use client'

import { useRouter } from 'next/navigation'
import * as O from 'app/components/organisms'
import poppins from 'globalStyles/fontFamily'

export default function NotFound() {
  const { replace } = useRouter()

  return (
    <html lang="pt-BR">
      <head>
        <meta
          content="minimum-scale=1, initial-scale=1, width=device-width"
          name="viewport"
        />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="Project frontend with nextjs" name="description" />
        <meta content="boilerplate, nextjs, reactjs, react" name="keywords" />
        <meta content="© Éverton Toffanetto" name="copyright" />
        <meta content="#fff" name="theme-color" />
        <link href="/favicon.png" rel="icon" type="image/png" />
        <link href="/favicon.png" rel="apple-touch-icon" />
        <title>Error Page</title>
      </head>

      <body className={poppins.className}>
        <O.Error reset={() => replace('/')} />
      </body>
    </html>
  )
}
