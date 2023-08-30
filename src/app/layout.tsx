import { ReactNode } from 'react'
import MainProvider from 'providers/mainProviders'
import DefaultTemplate from 'components/templates/DefaultTemplate'
import poppins from 'globalStyles/fontFamily'
import 'globalStyles/reset.scss'

const RootLayout = ({ children }: { children: ReactNode }) => {
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
          <DefaultTemplate>{children}</DefaultTemplate>
        </MainProvider>
      </body>
    </html>
  )
}

export default RootLayout
