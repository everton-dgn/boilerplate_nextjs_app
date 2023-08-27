import { ReactNode } from 'react'
import { Poppins } from 'next/font/google'
import { MainProvider } from 'providers'
import * as C from 'app/components'
import 'globalStyles/reset.scss'

const poppins = Poppins({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600']
})

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
          <C.DefaultTemplate>{children}</C.DefaultTemplate>
        </MainProvider>
      </body>
    </html>
  )
}
