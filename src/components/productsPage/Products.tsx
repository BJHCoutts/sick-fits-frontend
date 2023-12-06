import { useQuery } from '@apollo/client'
import { ALL_PRODUCTS_QUERY } from '../../lib/graphQL/queries/allProductsQuery'

export default function Products() {
	const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY)

	console.log(data, error, loading)
	return (
		<>
			<h1>Products Comp</h1>
		</>
	)
}
