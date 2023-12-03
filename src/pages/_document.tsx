import { Html, Head, Main, NextScript } from 'next/document'
import StyledComponentsRegistry from '../lib/registry'
import { ServerStyleSheet } from 'styled-components'

export default function Document() {
	return (
		<Html lang="en-CA">
			<Head>
				<meta
					name="description"
					content="Sick Fits online shoe store"
					key="desc"
				/>
			</Head>
			<body>
				<StyledComponentsRegistry>
					<Main />
				</StyledComponentsRegistry>
				<NextScript />
			</body>
		</Html>
	)
}
