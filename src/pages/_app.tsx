import Header from '../components/Header'
import Footer from '../components/Footer'

import NProgress from 'nprogress'
import '../components/styles/nprogress.css'
import Router from 'next/router'

import { AppProps } from 'next/app'
import { GlobalStyle } from '../components/styles/GlobalStyle'
import styled from 'styled-components'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

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

const InnerStyles = styled.main`
	max-width: var(--maxWidth);
	margin: 0 auto;
	padding: 2rem;
`
