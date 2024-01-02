import { useMutation } from '@apollo/client'
import useForm from '../lib/functions/useForm'
import SForm from './styles/SForm'
import DisplayError from './ErrorMessage'
import { REQUEST_RESET_PASSWORD_MUTATION } from '../lib/graphQL/mutations/requestResetPasswordMutation'
import Link from 'next/link'

export default function RequestResetPassword() {
	const { inputs, handleChange, resetForm } = useForm({
		email: '',
	})

	const [resetPassword, { data, loading, error }] = useMutation(
		REQUEST_RESET_PASSWORD_MUTATION,
		{
			variables: inputs,
		}
	)

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault()
		const res = await resetPassword().catch(console.error)
		resetForm()
	}

	return (
		<>
			<SForm method="POST" onSubmit={handleSubmit}>
				<h2>Request Password Reset</h2>
				<DisplayError error={error} />
				<fieldset disabled={loading} aria-busy={loading}>
					{data?.sendUserPasswordResetLink === null && (
						<p>
							Success! Password has been changed. Enter the ?token=token query
							string into the URL <Link href={`/reset`}>here</Link>
						</p>
					)}
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
					<button type="submit">Request Password Reset</button>
				</fieldset>
			</SForm>
		</>
	)
}
