import Products from './Products'
import Pagination from './Pagination'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function ProductsIndexPage() {
	const { query } = useRouter()

	const page = parseInt(query.page as string)

	return (
		<>
			<Head>
				{/* title is in pagination */}
				<meta name="description" content="Sick Fits Description" />
				<meta name="keywords" content="Sick Fits Keywords" />
				<meta name="author" content="Brian Coutts" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<Pagination page={page || 1} />
			<h1>Products</h1>
			<Products page={page || 1} />
			<Pagination page={page || 1} />
		</>
	)
}
