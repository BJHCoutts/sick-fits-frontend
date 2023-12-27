import Head from 'next/head'
import SignIn from '../../components/SignIn'

export default function SignInPage() {
	return (
		<>
			<Head>
				<title>Sign In Page</title>
			</Head>
			<h1>Sign In</h1>
			<SignIn />
		</>
	)
}
