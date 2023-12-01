import Header from '../components/Header'
import Footer from '../components/Footer'

import NProgress from 'nprogress'
import '../components/styles/nprogress.css'
import Router from 'next/router'

import { AppProps } from 'next/app'
import { GlobalStyle } from '../components/styles/GlobalStyle'
import styled from 'styled-components'
import { ApolloProvider } from '@apollo/client'
import withData from '../lib/withData'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

interface IMyApp extends AppProps {
	apollo: any
}

function myApp({ Component, pageProps, apollo }: IMyApp) {
	return (
		<>
			<GlobalStyle />
			<ApolloProvider client={apollo}>
				<Header />
				<InnerStyles>
					<Component {...pageProps} />
				</InnerStyles>
				<Footer />
			</ApolloProvider>
		</>
	)
}

const InnerStyles = styled.main`
	max-width: var(--maxWidth);
	margin: 0 auto;
	padding: 2rem;
`
export default withData(myApp)
