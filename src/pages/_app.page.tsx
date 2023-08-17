import type { AppProps } from 'next/app'
import { Page } from '../@types/page'
import { MainProvider } from 'ui/providers'
import * as C from 'ui/components'

type Props = AppProps & { Component: Page }

export default function App({ Component, pageProps }: Props) {
  const Template = Component.Template || C.DefaultTemplate

  return (
    <MainProvider>
      <Template>
        <Component {...pageProps} />
      </Template>
    </MainProvider>
  )
}
