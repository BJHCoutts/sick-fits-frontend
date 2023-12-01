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

interface IApp extends AppProps {
	apollo: any
}

function App({ Component, pageProps, apollo }: IApp) {
	return (
		<>
			<ApolloProvider client={apollo}>
				<GlobalStyle />
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

App.getInitialProps = async function ({ Component, ctx }) {
	let pageProps = {}
	if (Component.getInitialProps) {
		pageProps = await Component.getInitialProps(ctx)
	}
	pageProps.query = ctx.query
	return { pageProps }
}

export default withData(App)
