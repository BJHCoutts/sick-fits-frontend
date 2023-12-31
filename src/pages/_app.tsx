import Header from '../components/Header'
import Footer from '../components/Footer'

import NProgress from 'nprogress'
import '../components/styles/nprogress.css'
import Router from 'next/router'

import { AppProps } from 'next/app'
import styled from 'styled-components'
import { ApolloProvider } from '@apollo/client'
import withData from '../lib/functions/withData'
import { GlobalStyle } from '../components/styles/GlobalStyle'
import { CartStateProvider } from '../lib/context/cartState'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

interface IApp extends AppProps {
	apollo: any
}

function App({ Component, pageProps, apollo }: IApp) {
	return (
		<>
			<ApolloProvider client={apollo}>
				<CartStateProvider>
					<GlobalStyle />
					<Header />
					<InnerStyles>
						<Component {...pageProps} />
					</InnerStyles>
					<Footer />
				</CartStateProvider>
			</ApolloProvider>
		</>
	)
}

const InnerStyles = styled.main`
	max-width: var(--maxWidth);
	margin: 0 auto;
	padding: 2rem;
`

export default withData(App)
