import { ReactNode } from 'react'
import { MainProvider } from 'providers'
import * as T from 'app/components/templates'
import 'globalStyles/reset.scss'
import poppins from 'globalStyles/fontFamily'

export default function RootLayout({ children }: { children: ReactNode }) {
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
        <title>Home Page</title>
      </head>

      <body className={poppins.className}>
        <MainProvider>
          <T.DefaultTemplate>{children}</T.DefaultTemplate>
        </MainProvider>
      </body>
    </html>
  )
}
