import { useQuery } from '@apollo/client'
import { PRODUCT_QUERY } from '../../lib/graphQL/queries/productQuery'
import DisplayError from '../../components/ErrorMessage'
import { TProduct } from '../../lib/types/TProduct'
import Head from 'next/head'
import styled from 'styled-components'

export default function SingleProduct({
	id,
}: {
	id: string | string[] | undefined
}) {
	const { data, error, loading } = useQuery(PRODUCT_QUERY, {
		variables: { id },
	})

	if (loading) return <p>Loading...</p>
	if (error) return <DisplayError error={error} />

	const { Product }: { Product: TProduct } = data

	return (
		<>
			<Head>
				<title>{`Sick Fits | ${Product.name}`}</title>
			</Head>
			<SProduct data-testid="single-product">
				<img
					src={Product?.photo?.image.publicUrlTransformed}
					alt={Product?.photo?.altText}
				/>

				{!Product.photo && <h3 className="no-photo">No Photo</h3>}
				<div className="details">
					<h2>{Product.name}</h2>
					<p>{Product.description}</p>
				</div>
			</SProduct>
		</>
	)
}

const SProduct = styled.section`
	display: grid;
	grid-auto-columns: 1fr;
	grid-auto-flow: column;
	min-height: 800px;
	max-width: var(--max-width);
	align-items: top;
	gap: 2rem;
	img {
		object-fit: contain;
	}
`
