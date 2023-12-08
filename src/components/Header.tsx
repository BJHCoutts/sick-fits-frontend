import Link from 'next/link'
import Nav from './Nav'
import styled from 'styled-components'

export default function Header() {
	return (
		<HeaderStyled>
			<div className="bar">
				<Logo>
					<Link href={'/'}>Sick Fits</Link>
				</Logo>
				<Nav />
			</div>
			<div className="sub-bar">
				<p>Search</p>
			</div>
		</HeaderStyled>
	)
}

const Logo = styled.h1`
	font-size: 4rem;
	margin-left: 2em;
	position: relative;
	z-index: 2;
	background-color: red;
	transform: skewX(-7deg);
	white-space: nowrap;

	a {
		color: white;
		text-decoration: none;
		text-transform: uppercase;
		padding: 0.5em 1em;
	}
`

const HeaderStyled = styled.header`
	.bar {
		border-bottom: 10px solid var(--black, black);
		display: grid;
		grid-template-columns: auto 1fr;
		justify-content: space-between;
		align-items: stretch;
	}

	.sub-bar {
		display: grid;
		grid-template-columns: 1fr auto;
		border-bottom: 1px solid var(--black, black);
	}
`
