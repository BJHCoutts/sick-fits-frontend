import { useMutation } from '@apollo/client'
import useForm from '../lib/functions/useForm'
import SForm from './styles/SForm'
import { SIGN_IN_MUTATION } from '../lib/graphQL/mutations/signInMutation'
import { CURRENT_USER_QUERY } from '../lib/graphQL/queries/currentUserQuery'

export default function SignUp() {
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
		resetForm()
	}

	return (
		<>
			<SForm method="POST" onSubmit={handleSubmit}>
				<h2>Sign Up for Your Account</h2>
				<fieldset>
					<label htmlFor="email">
						Email
						<input
							type="email"
							name="email"
							id="email"
							placeholder="Your Email Address"
							autoComplete="email"
							value={inputs.email}
							onChange={handleChange}
						/>
					</label>
					<label htmlFor="name">
						Name
						<input
							type="name"
							name="name"
							id="name"
							placeholder="Your Name"
							autoComplete="name"
							value={inputs.name}
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
