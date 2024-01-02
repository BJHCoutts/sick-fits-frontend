import styled from 'styled-components'
import { useUser } from '../lib/functions/useUser'
import SCart from './styles/SCart'
import Supreme from './styles/Supreme'
import { TProduct } from '../lib/types/TProduct'
import formatMoney from '../lib/functions/formatMoney'
import { TCartItem } from '../lib/types/TCartItem'
import calcCartTOtalPrice from '../lib/functions/calcCartTotalPrice'

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
					{user.cart.map((cartItem: TCartItem) => (
						<CartItem key={cartItem.id} cartItem={cartItem} />
					))}
				</ul>
			)}
			<footer>
				<p>{formatMoney(calcCartTOtalPrice(user.cart))}</p>
			</footer>
		</SCart>
	)
}

function CartItem({
	cartItem: { product, quantity },
}: {
	cartItem: { product: TProduct; quantity: number }
}) {
	return (
		<SCartItem>
			<img src={product.photo.image.publicUrlTransformed} alt={product.name} />
			<div>
				<h3>{product.name}</h3>
				<p>
					{formatMoney(product.price * quantity)} -{' '}
					<em>
						{quantity} &times; {formatMoney(product.price)}
					</em>
				</p>
			</div>
		</SCartItem>
	)
}

const SCartItem = styled.li`
	padding: 1rem 0;
	border-bottom: 1px solid var(--lightGrey);
`
