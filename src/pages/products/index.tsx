import Head from 'next/head'
import Products from './Products'

export default function ProductsIndexPage() {
	return (
		<>
			<Head>
				<title>Products Page</title>
			</Head>
			<h1>Products</h1>
			<Products />
		</>
	)
}
