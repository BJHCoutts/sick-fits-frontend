import { useMutation } from '@apollo/client'
import { ADD_TO_CART_MUTATION } from '../lib/graphQL/mutations/addToCart'
import { CURRENT_USER_QUERY } from '../lib/graphQL/queries/currentUserQuery'
import { useCart } from '../lib/context/cartState'

export default function AddToCart({ productId }: { productId: string }) {
	const [addToCart, { loading }] = useMutation(ADD_TO_CART_MUTATION, {
		variables: { productId },
		refetchQueries: [{ query: CURRENT_USER_QUERY }],
	})
	const { openCart } = useCart()

	return (
		<button
			type="button"
			onClick={() => (addToCart(), openCart())}
			disabled={loading}
			aria-busy={loading}
		>
			Add to Cart 🛒
		</button>
	)
}
