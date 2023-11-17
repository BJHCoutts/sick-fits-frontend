import Header from '../components/Header'
import Footer from '../components/Footer'

import { createGlobalStyle } from 'styled-components'
import { AppProps } from 'next/app'

const GlobalStyles = createGlobalStyle`
	
`

export default function myApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyles />
			<Header />
			<main>
				<Component {...pageProps} />
			</main>
			<Footer />
		</>
	)
}
