import Products from './Products'
import Pagination from './Pagination'

export default function ProductsIndexPage() {
	return (
		<>
			<Pagination page={1} />
			<h1>Products</h1>
			<Products />
			<Pagination page={1} />
		</>
	)
}
