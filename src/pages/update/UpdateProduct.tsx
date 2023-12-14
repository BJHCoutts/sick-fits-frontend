import { useRouter } from 'next/router'
import DisplayError from '../../components/ErrorMessage'
import { TProduct } from '../../lib/types/TProduct'
import { useQuery } from '@apollo/client'
import { PRODUCT_QUERY } from '../../lib/graphQL/queries/productQuery'

export default function UpdateProduct() {
	const {
		query: { id },
	} = useRouter()

	const { data, error, loading } = useQuery(PRODUCT_QUERY, {
		variables: { id },
	})

	if (loading) return <p>Loading...</p>
	if (error) return <DisplayError error={error} />

	const { Product }: { Product: TProduct } = data

	console.log(Product)

	return (
		<>
			<p>Update Product Form</p>
		</>
	)
}
