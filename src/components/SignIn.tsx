import useForm from '../lib/functions/useForm'
import SForm from './styles/SForm'

export default function SignIn() {
	const { inputs, handleChange, resetForm } = useForm({
		email: '',
		password: '',
	})

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		console.log(inputs)
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
							id="email"
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
