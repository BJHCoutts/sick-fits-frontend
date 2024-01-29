import { fakeUser } from '../src/lib/testUtils'
import { SIGN_UP_MUTATION } from '../src/lib/graphQL/mutations/signUpMutation'
// import { CURRENT_USER_QUERY } from '../src/lib/graphQL/queries/currentUserQuery'
import { MockedProvider } from '@apollo/client/testing'
import { render, screen } from '@testing-library/react'
import SignUp from '../src/components/SignUp'
import userEvent from '@testing-library/user-event'

const user = fakeUser()
const password = 'password'

const mocks = [
	{
		request: {
			query: SIGN_UP_MUTATION,
			variables: {
				name: user.name,
				email: user.email,
				password,
			},
		},
		result: {
			data: {
				createUser: {
					__typename: 'User',
					id: 'abc123',
					name: user.name,
					email: user.email,
				},
			},
		},
	},
	// {
	// 	request: { query: CURRENT_USER_QUERY },
	// 	result: { data: { authenticatedItem: user } },
	// },
]

describe('<SignUp />', () => {
	it('renders and matches the snapshot', async () => {
		const { container, debug } = render(
			<MockedProvider mocks={mocks}>
				<SignUp />
			</MockedProvider>
		)
		expect(container).toMatchSnapshot()

		await userEvent.type(screen.getByPlaceholderText('Your Name'), user.name)

		await userEvent.type(screen.getByPlaceholderText('Your Email'), user.email)

		await userEvent.type(screen.getByPlaceholderText('Your Password'), password)

		await userEvent.click(screen.getByText('Sign Up'))

		await screen.findByText(`Signed Up with ${user.email}`)
	})
})
