import { AppProps } from 'next/app'
import { ReactElement } from 'react'
import Page from '../components/Page'

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Page />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
