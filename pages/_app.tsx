import '../styles/globals.css'
import type { AppProps } from 'next/app'

import Main from '../layouts/Main/Main'

export default function App({ Component, pageProps }: AppProps) {
  return <Main>
     <Component {...pageProps} />
  </Main>
}
