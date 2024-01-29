import { render, screen } from '@testing-library/react'
import { REQUEST_RESET_PASSWORD_MUTATION } from '../src/lib/graphQL/mutations/requestResetPasswordMutation'
import { MockedProvider } from '@apollo/client/testing'
import RequestResetPassword from '../src/components/RequestResetPassword'
import userEvent from '@testing-library/user-event'
import wait from 'waait'

const email = 'bjhcoutts@gmail.com'
const mocks = [
	{
		request: {
			query: REQUEST_RESET_PASSWORD_MUTATION,
			variables: { email },
		},
		result: {
			data: {
				sendUserPasswordResetLink: null,
			},
		},
	},
]

describe('<RequestReset />', () => {
	it('renders and matches snapshot', () => {
		const { container } = render(
			<MockedProvider>
				<RequestResetPassword />
			</MockedProvider>
		)
		expect(container).toMatchSnapshot()
	})

	it(' calls the mutation when submitted', async () => {
		const { container } = render(
			<MockedProvider mocks={mocks}>
				<RequestResetPassword />
			</MockedProvider>
		)
		userEvent.type(screen.getByPlaceholderText(/email/i), email)

		userEvent.click(screen.getByTestId('request-reset-password'))
		// userEvent.click(screen.getByText(/Request Password Reset/i))

		// userEvent.click(screen.getByText(/Request Password Reset/))

		// const success = await screen.findByTestId('success-message')
		// expect(success).toBeInTheDocument()
	})
})
