import { useMutation } from '@apollo/client'
import useForm from '../lib/functions/useForm'
import SForm from './styles/SForm'
import DisplayError from './ErrorMessage'
import { RESET_PASSWORD_MUTATION } from '../lib/graphQL/mutations/resetPasswordMutation'
import { useRouter } from 'next/router'
import RequestResetPassword from './RequestResetPassword'

export default function ResetPassword() {
	const {
		query: { token },
	} = useRouter()

	if (!token)
		return (
			<>
				<p>Sorry, but you must supply token</p>
				<RequestResetPassword />
			</>
		)

	const { inputs, handleChange, resetForm } = useForm({
		email: '',
		password: '',
		token,
	})

	const [resetPassword, { data, loading, error }] = useMutation(
		RESET_PASSWORD_MUTATION,
		{
			variables: inputs,
		}
	)

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault()
		const res = await resetPassword().catch(console.error)
		resetForm()
	}

	const successError = data?.redeemUserPasswordResetToken?.code
		? data?.redeemUserPasswordResetToken
		: null

	return (
		<>
			<SForm method="POST" onSubmit={handleSubmit}>
				<h2>Reset Password</h2>
				<DisplayError error={error || successError} />
				<fieldset>
					{data?.redeemUserPasswordResetToken === null ? (
						<p>Success! Password has been changed</p>
					) : null}
					<label htmlFor="email">
						Email
						<input
							type="email"
							name="email"
							placeholder="Your Email Address"
							autoComplete="email"
							value={inputs.email}
							onChange={handleChange}
						/>
					</label>
					<label htmlFor="password">
						Password
						<input
							type="password"
							name="password"
							id="password"
							placeholder="Your Password"
							autoComplete="password"
							value={inputs.password}
							onChange={handleChange}
						/>
					</label>
					<button type="submit">Sign In</button>
				</fieldset>
			</SForm>
		</>
	)
}
