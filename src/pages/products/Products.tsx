import { useQuery } from '@apollo/client'
import { ALL_PRODUCTS_QUERY } from '../../lib/graphQL/queries/allProductsQuery'
import { TProduct } from '../../lib/types/TProduct'
import styled from 'styled-components'
import ProductCard from './ProductCard'
import { perPage } from '../../config'

interface IProducts {
	page: number
}

export default function Products({ page }: IProducts) {
	const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY, {
		variables: {
			skip: page * perPage - perPage,
			first: perPage,
		},
	})

	if (loading) return <p>Loading...</p>
	if (error) return <p>Error: {error.message}</p>

	return (
		<>
			<SProductList>
				{data.allProducts.map((product: TProduct) => (
					<ProductCard product={product} key={product.id} />
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
	padding: 0;
`
