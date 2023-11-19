import Header from '../components/Header'
import Footer from '../components/Footer'

import { AppProps } from 'next/app'
import { GlobalStyle } from '../components/styles/GlobalStyle'
import styled from 'styled-components'

const InnerStyles = styled.main`
	max-width: var(--maxWidth);
	margin: 0 auto;
	padding: 2rem;
`

export default function myApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyle />
			<Header />
			<InnerStyles>
				<Component {...pageProps} />
			</InnerStyles>
			<Footer />
		</>
	)
}
