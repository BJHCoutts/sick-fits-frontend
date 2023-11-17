import Link from 'next/link'
import Nav from './Nav'

export default function Header() {
	return (
		<header>
			<h2>Header</h2>
			<div className="bar">
				<Link href={'/'}>Sick Fits</Link>
			</div>
			<div className="sub-bar">
				<Nav />
			</div>
		</header>
	)
}
