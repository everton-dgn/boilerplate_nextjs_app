import { Fragment } from 'react'
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

const MyDocument = () => {
  return (
    <Html lang="pt-BR">
      <Head>
        <meta
          content="minimum-scale=1, initial-scale=1, width=device-width"
          name="viewport"
        />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="Project frontend with nextjs" name="description" />
        <meta content="boilerplate, nextjs, reactjs, react" name="keywords" />
        <meta content="© Éverton Toffanetto" name="copyright" />
        <meta content="#fff" name="theme-color" />
        <link href="https://fonts.gstatic.com" rel="preconnect" />
        <link
          as="style"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
          rel="preload"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link href="/favicon.png" rel="icon" type="image/png" />
        <link href="/favicon.png" rel="apple-touch-icon" />
        <meta content="#fff" name="theme-color" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default MyDocument

export const getInitialProps = async (ctx: DocumentContext) => {
  const sheet = new ServerStyleSheet()
  // eslint-disable-next-line testing-library/render-result-naming-convention
  const originalRenderPage = ctx.renderPage

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
      })

    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...initialProps,
      styles: [
        <Fragment key={1}>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </Fragment>
      ]
    }
  } finally {
    sheet.seal()
  }
}
