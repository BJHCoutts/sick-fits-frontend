import { useMutation } from '@apollo/client'
import useForm from '../lib/functions/useForm'
import SForm from './styles/SForm'
import { CURRENT_USER_QUERY } from '../lib/graphQL/queries/currentUserQuery'
import { SIGN_UP_MUTATION } from '../lib/graphQL/mutations/signUpMutation'
import DisplayError from './ErrorMessage'
import { SIGN_IN_MUTATION } from '../lib/graphQL/mutations/signInMutation'

export default function SignUp() {
	const { inputs, handleChange, resetForm } = useForm({
		email: '',
		name: '',
		password: '',
	})

	const [signUp, { data: sUData, loading: sULoading, error: sUError }] =
		useMutation(SIGN_UP_MUTATION, {
			variables: inputs,
		})

	const [signIn, { error: sIError, loading: sILoading }] = useMutation(
		SIGN_IN_MUTATION,
		{
			variables: inputs,
			refetchQueries: [{ query: CURRENT_USER_QUERY }],
		}
	)

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault()
		await signUp().catch(console.error)
		await signIn().catch(console.error)
		resetForm()
	}

	return (
		<>
			<SForm method="POST" onSubmit={handleSubmit}>
				<h2>Sign Up for Your Account</h2>
				<DisplayError error={sUError} />
				<fieldset>
					{sUData?.createUser && <p>Signed Up with {sUData.createUser.name}</p>}
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
					<button type="submit">Sign Up</button>
				</fieldset>
			</SForm>
		</>
	)
}
