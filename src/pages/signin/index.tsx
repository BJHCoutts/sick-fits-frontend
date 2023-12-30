import Head from 'next/head'
import SignIn from '../../components/SignIn'
import SignUp from '../../components/SignUp'
import styled from 'styled-components'

export default function SignInPage() {
	return (
		<>
			<Head>
				<title>Sign In / Up Page</title>
			</Head>
			<h1>Sign In / Up</h1>
			<SGrid>
				<SignIn />
				<SignUp />
			</SGrid>
		</>
	)
}

const SGrid = styled.section`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	grid-gap: 2rem;
`
