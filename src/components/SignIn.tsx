import { useMutation } from '@apollo/client'
import useForm from '../lib/functions/useForm'
import SForm from './styles/SForm'
import { SIGN_IN_MUTATION } from '../lib/graphQL/mutations/signInMutation'
import { CURRENT_USER_QUERY } from '../lib/graphQL/queries/currentUserQuery'

export default function SignIn() {
	const { inputs, handleChange, resetForm } = useForm({
		email: '',
		password: '',
	})

	const [signIn, { error, loading }] = useMutation(SIGN_IN_MUTATION, {
		variables: inputs,
		refetchQueries: [{ query: CURRENT_USER_QUERY }],
	})

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault()
		const res = await signIn()
		console.log(res)
		resetForm()
	}

	return (
		<>
			<SForm method="POST" onSubmit={handleSubmit}>
				<h2>Sign Into Your Account</h2>
				<fieldset>
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
