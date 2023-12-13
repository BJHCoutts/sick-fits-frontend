import { useQuery } from '@apollo/client'
import { PRODUCT_QUERY } from '../../lib/graphQL/queries/productQuery'
import DisplayError from '../../components/ErrorMessage'
import { TProduct } from '../../lib/types/TProduct'

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
			<div>
				<img
					src={Product?.photo?.image.publicUrlTransformed}
					alt={Product?.photo?.altText}
				/>

				{!Product.photo && <h3 className="no-photo">No Photo</h3>}
				<div className="details">
					<h2>{Product.name}</h2>
					<p>{Product.description}</p>
				</div>
			</div>
		</>
	)
}
