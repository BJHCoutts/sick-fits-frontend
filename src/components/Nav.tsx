import Link from 'next/link'
import SNavList from './styles/SNav'

export default function Nav() {
	return (
		<SNavList>
			<Link href="/products">Products</Link>

			<Link href="/sell">Sell</Link>

			<Link href="/orders">Orders</Link>

			<Link href="/account">Account</Link>
		</SNavList>
	)
}
