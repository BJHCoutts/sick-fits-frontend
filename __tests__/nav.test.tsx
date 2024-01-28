import { render, screen } from '@testing-library/react'
import { CURRENT_USER_QUERY } from '../src/lib/graphQL/queries/currentUserQuery'
import { fakeUser } from '../src/lib/testUtils'
import { CartStateProvider } from '../src/lib/context/cartState'
import { MockedProvider } from '@apollo/client/testing'
import Nav from '../src/components/Nav'

const notSignedInMocks = [
	{
		request: { query: CURRENT_USER_QUERY },
		result: { data: { authItem: null } },
	},
]

const signedInMocks = [
	{
		request: { query: CURRENT_USER_QUERY },
		result: { data: { authItem: fakeUser({ overrides: {} }) } },
	},
]

describe('<Nav />', () => {
	it('Renders a minimal nav when signed out', () => {
		const { container, debug } = render(
			<CartStateProvider>
				<MockedProvider mocks={notSignedInMocks}>
					<Nav />
				</MockedProvider>
			</CartStateProvider>
		)
		debug()
		expect(container).toHaveTextContent('Sign In / Up')
		expect(container).toMatchSnapshot()
		const link = screen.getByText('Sign In / Up')
		expect(link).toHaveAttribute('href', '/signin')
	})
})
