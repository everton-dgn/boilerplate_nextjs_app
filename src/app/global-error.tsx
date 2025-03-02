'use client'

import inter from 'theme/fontFamily'

import { ErrorFallback } from 'components/organisms/ErrorFallback'

type ErrorProps = {
  error: Error
  reset: () => void
}

const GlobalError = ({ error, reset }: ErrorProps) => (
  <html lang="en">
    <head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover"
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

    <body className={inter.className}>
      <ErrorFallback reset={reset} />
      <p>{error.message}</p>
    </body>
  </html>
)

export default GlobalError
