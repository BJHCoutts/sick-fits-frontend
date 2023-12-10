import Head from 'next/head'
import CreateProduct from './CreateProduct'

export default function SellIndexPage() {
	return (
		<>
			<Head>
				<title>Sell Page</title>
			</Head>
			<h1>Sell</h1>
			<CreateProduct />
		</>
	)
}
