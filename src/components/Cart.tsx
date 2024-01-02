import styled from 'styled-components'
import { useUser } from '../lib/functions/useUser'
import SCart from './styles/SCart'
import Supreme from './styles/Supreme'

export default function Cart() {
	const user = useUser()
	if (!user) return null
	return (
		<SCart open>
			<header>
				<Supreme>{user.name}'s Cart</Supreme>
			</header>
			{user?.cart && (
				<ul>
					{user.cart.map((cartItem) => (
						<CartItem key={cartItem.id} cartItem={cartItem} />
					))}
				</ul>
			)}
		</SCart>
	)
}

function CartItem({ cartItem }) {
	return <SCartItem>{cartItem.id}</SCartItem>
}

const SCartItem = styled.li`
	padding: 1rem 0;
	border-bottom: 1px solid var(--lightGrey);
`
