import { useMutation } from '@apollo/client'
import { REMOVE_FROM_CART_MUTATION } from '../lib/graphQL/mutations/removeFromCartMutation'
import styled from 'styled-components'

function update(cache, payload) {
	cache.evict(cache.identify(payload.data.deleteCartItem))
}

export default function RemoveFromCart({ id }: { id: string }) {
	const [removeFromCart, { loading, error }] = useMutation(
		REMOVE_FROM_CART_MUTATION,
		{
			variables: { id },
			update,
		}
	)
	return (
		<BigButton
			title="Remove this Item from Cart"
			type="button"
			onClick={removeFromCart}
			disabled={loading}
			aria-busy={loading}
		>
			&times;
		</BigButton>
	)
}

const BigButton = styled.button`
	font-size: 3rem;
	background: none;
	border: 0;
	&:hover {
		color: var(--red);
	}
`
