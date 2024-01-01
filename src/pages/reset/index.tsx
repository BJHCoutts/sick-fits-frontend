import Head from 'next/head'
import ResetPassword from '../../components/ResetPassword'
import { useRouter } from 'next/router'

export default function SignInPage() {
	return (
		<>
			<Head>
				<title>Reset Password Page</title>
			</Head>
			<h1>Reset Your Password</h1>
			<ResetPassword />
		</>
	)
}
