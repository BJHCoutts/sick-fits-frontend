import Link from 'next/link'
import SNav from './styles/SNav'

export default function Nav() {
	return (
		<SNav>
			<ul>
				<li>
					<Link href="/products">Products</Link>
				</li>
				<li>
					<Link href="/sell">Sell</Link>
				</li>
				<li>
					<Link href="/orders">Orders</Link>
				</li>
				<li>
					<Link href="/account">Account</Link>
				</li>
			</ul>
		</SNav>
	)
}
