import Link from 'next/link'
import SNav from './styles/SNav'
import { useUser } from '../lib/functions/useUser'

export default function Nav() {
	const user = useUser()

	return (
		<SNav>
			<ul>
				<li>
					<Link href="/products">Products</Link>
				</li>
				{user ? (
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
					</>
				) : (
					<>
						<li>
							<Link href="/sign-in">Sign In</Link>
						</li>
					</>
				)}
			</ul>
		</SNav>
	)
}
