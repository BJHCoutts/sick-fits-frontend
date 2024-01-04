import Link from 'next/link'
import SNav from './styles/SNav'
import { useUser } from '../lib/functions/useUser'
import SignOut from './SignOut'
import { useCart } from '../lib/context/cartState'
import CartCount from './CartCount'

export default function Nav() {
	const user = useUser()
	const { openCart } = useCart()

	return (
		<SNav>
			<ul>
				<li>
					<Link href="/products">Products</Link>
				</li>
				{user && (
					<>
						<li>
							<Link href="/sell">Sell</Link>
						</li>
						<li>
							<Link href="/orders">Orders</Link>
						</li>
						<li>
							<Link href="/account">Account</Link>
						</li>
						<li>
							<SignOut />
						</li>
						<li>
							<button type="button" onClick={openCart}>
								My Cart
								<CartCount
									count={user.cart.reduce(
										(tally, cartItem) => tally + cartItem.quantity,
										0
									)}
								/>
							</button>
						</li>
					</>
				)}
				{!user && (
					<>
						<li>
							<Link href="/signin">Sign In / Up</Link>
						</li>
					</>
				)}
			</ul>
		</SNav>
	)
}
