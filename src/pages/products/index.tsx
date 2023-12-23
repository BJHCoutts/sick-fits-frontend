import Products from './Products'
import Pagination from './Pagination'

export default function ProductsIndexPage() {
	return (
		<>
			<Pagination />
			<h1>Products</h1>
			<Products />
			<Pagination />
		</>
	)
}
