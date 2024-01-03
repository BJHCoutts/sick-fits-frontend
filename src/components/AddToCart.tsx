import { useMutation } from '@apollo/client'
import { ADD_TO_CART_MUTATION } from '../lib/graphQL/mutations/addToCart'
import { CURRENT_USER_QUERY } from '../lib/graphQL/queries/currentUserQuery'

export default function AddToCart({ productId }: { productId: string }) {
	const [addToCart, { loading }] = useMutation(ADD_TO_CART_MUTATION, {
		variables: { productId },
		refetchQueries: [{ query: CURRENT_USER_QUERY }],
	})

	return (
		<button
			type="button"
			onClick={addToCart}
			disabled={loading}
			aria-busy={loading}
		>
			Add to Cart 🛒
		</button>
	)
}
