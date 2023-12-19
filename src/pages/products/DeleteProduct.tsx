import { useMutation } from '@apollo/client'
import { DELETE_PRODUCT_MUTATION } from '../../lib/graphQL/mutations/deleteProductMutation'
import { ALL_PRODUCTS_QUERY } from '../../lib/graphQL/queries/allProductsQuery'

interface IDeleteProduct {
	id: number
	children: React.ReactNode
}

export default function DeleteProduct({ id, children }: IDeleteProduct) {
	const [deleteProduct, { loading, error }] = useMutation(
		DELETE_PRODUCT_MUTATION,
		{
			variables: { id },
			refetchQueries: [{ query: ALL_PRODUCTS_QUERY }],
		}
	)

	return (
		<button
			type="button"
			onClick={() => {
				if (confirm('Are you sure you want to delete this product?')) {
					console.log('Delete!')
					deleteProduct().catch((err) => alert(err.message))
				}
			}}
			disabled={loading}
		>
			{children}
		</button>
	)
}
