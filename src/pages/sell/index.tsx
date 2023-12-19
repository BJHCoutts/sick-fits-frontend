import Head from 'next/head'
import CreateProductForm from './CreateProductForm'

export default function SellIndexPage() {
	return (
		<>
			<Head>
				<title>Sell Page</title>
			</Head>
			<h1>Sell</h1>
			<CreateProductForm />
		</>
	)
}
