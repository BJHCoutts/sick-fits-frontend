import { render, screen } from '@testing-library/react'
import { PRODUCT_QUERY } from '../src/lib/graphQL/queries/productQuery'
import { MockedProvider } from '@apollo/client/testing'
import SingleProduct from '../src/pages/products/SingleProduct'
import { fakeItem } from '../src/lib/testUtils'

const fakeProduct = fakeItem()

describe('<SingleProduct />', () => {
	it('renders with correct data', async () => {
		const mocks = [
			{
				request: {
					query: PRODUCT_QUERY,
					variables: {
						id: '123',
					},
				},
				result: {
					data: {
						Product: fakeProduct,
					},
				},
			},
		]
		const { container, debug } = render(
			<MockedProvider mocks={mocks}>
				<SingleProduct id="123" />
			</MockedProvider>
		)
		await screen.findByTestId('single-product')
		expect(container).toMatchSnapshot()
	})
})

it('Errors out when product is not found', async () => {
	const mockError = [
		{
			request: {
				query: PRODUCT_QUERY,
				variables: {
					id: '123',
				},
			},
			result: {
				errors: [{ message: 'Product not found' }],
			},
		},
	]

	const { container, debug } = render(
		<MockedProvider mocks={mockError}>
			<SingleProduct id="123" />
		</MockedProvider>
	)

	await screen.findByTestId('graphql-error')
	expect(container).toHaveTextContent('Shoot!')
})
