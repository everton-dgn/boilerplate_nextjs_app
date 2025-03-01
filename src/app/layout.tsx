import type { ReactNode } from 'react'

import poppins from 'theme/fontFamily'

import { MainProvider } from 'providers/mainProvider'
import 'theme/reset.css'

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="pt-BR">
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
    </head>

    <body className={poppins.className}>
      <MainProvider>{children}</MainProvider>
    </body>
  </html>
)

export default RootLayout
