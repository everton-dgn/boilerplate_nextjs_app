import type { ReactNode } from 'react'

import inter from 'theme/fontFamily'

import { MainProvider } from 'providers/mainProvider'
import 'theme/reset.css'

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="en">
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
    </head>

    <body className={inter.className}>
      <MainProvider>{children}</MainProvider>
    </body>
  </html>
)

export default RootLayout
