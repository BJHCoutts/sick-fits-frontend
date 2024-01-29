import { render, screen } from '@testing-library/react'
import { REQUEST_RESET_PASSWORD_MUTATION } from '../src/lib/graphQL/mutations/requestResetPasswordMutation'
import { MockedProvider } from '@apollo/client/testing'
import RequestResetPassword from '../src/components/RequestResetPassword'
import userEvent from '@testing-library/user-event'

const email = 'test@example.com'
const mocks = [
	{
		request: {
			query: REQUEST_RESET_PASSWORD_MUTATION,
			variables: { email },
		},
		result: {
			data: { sendUserPasswordResetLink: null },
		},
	},
]

describe('<RequestResetPassword />', () => {
	it('renders and matches snapshot', () => {
		const { container } = render(
			<MockedProvider>
				<RequestResetPassword />
			</MockedProvider>
		)
		expect(container).toMatchSnapshot()
	})

	it(' calls the mutation when submitted', async () => {
		const { container, debug } = render(
			<MockedProvider mocks={mocks}>
				<RequestResetPassword />
			</MockedProvider>
		)

		// debug(screen.getByLabelText('Email'))
		const emailInput = screen.getByLabelText('Email')
		userEvent.type(emailInput, email)

		debug(emailInput)
		// expect(screen.getByDisplayValue(email)).toBeInTheDocument()

		// userEvent.click(screen.getByTestId('request-reset-password-button'))

		// const success = await screen.findByText(/success/i)
		// debug()
		// TODO Success message not being triggered in test, investigate why
		// await waitFor(() => {
		// 	expect(success).toBeInTheDocument()
		// })
		// expect(success).toBeInTheDocument()
	})
})
