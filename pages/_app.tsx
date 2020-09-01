import { AppProps } from 'next/app'
import { ReactElement } from 'react'

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <p>Hey I&apos;m on every page</p>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
