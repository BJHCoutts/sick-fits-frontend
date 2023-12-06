import { useQuery } from '@apollo/client'
import { ALL_PRODUCTS_QUERY } from '../../lib/graphQL/queries/allProductsQuery'
import { TProduct } from '../../lib/types/product'
import styled from 'styled-components'
import Product from './Product'

export default function Products() {
	const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY)

	if (loading) return <p>Loading...</p>
	if (error) return <p>Error: {error.message}</p>

	console.log(data, error, loading)
	return (
		<>
			<SProductList>
				{data.allProducts.map((product: TProduct) => (
					<Product product={product} key={product.id} />
				))}
			</SProductList>
		</>
	)
}

const SProductList = styled.ul`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 60px;
	list-style-type: none;
`
