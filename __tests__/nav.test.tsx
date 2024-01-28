import { render, screen } from '@testing-library/react'
import { CURRENT_USER_QUERY } from '../src/lib/graphQL/queries/currentUserQuery'
import { fakeCartItem, fakeUser } from '../src/lib/testUtils'
import { CartStateProvider } from '../src/lib/context/cartState'
import { MockedProvider } from '@apollo/client/testing'
import Nav from '../src/components/Nav'
import wait from 'waait'
import { act } from 'react-dom/test-utils'

const notSignedInMocks = [
	{
		request: { query: CURRENT_USER_QUERY },
		result: { data: { authenticatedItem: null } },
	},
]

const signedInMocks = [
	{
		request: { query: CURRENT_USER_QUERY },
		result: { data: { authenticatedItem: fakeUser({}) } },
	},
]

const signedInMocksWithCartItems = [
	{
		request: { query: CURRENT_USER_QUERY },
		result: {
			data: {
				authenticatedItem: fakeUser({
					cart: [fakeCartItem({})],
				}),
			},
		},
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
		debug()
	})

	it('renders a full nav when signed in', async () => {
		const { container, debug } = render(
			<CartStateProvider>
				<MockedProvider mocks={signedInMocks}>
					<Nav />
				</MockedProvider>
			</CartStateProvider>
		)

		await screen.findByText('Account')
		expect(container).toMatchSnapshot()
		expect(container).toHaveTextContent('Sign Out')
		expect(container).toHaveTextContent('My Cart')
	})

	it('renders the amount of items in the cart', async () => {
		const { container, debug } = render(
			<CartStateProvider>
				<MockedProvider mocks={signedInMocksWithCartItems}>
					<Nav />
				</MockedProvider>
			</CartStateProvider>
		)
		await wait(400)
		await screen.findByText('4')
	})
})
