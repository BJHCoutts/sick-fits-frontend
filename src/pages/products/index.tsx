import Head from 'next/head'
import Products from '../../components/productsPage/Products'

export default function ProductsIndexPage() {
	return (
		<>
			<Head>
				<title>Product Page</title>
			</Head>
			<h1>Products</h1>
			<Products />
		</>
	)
}
