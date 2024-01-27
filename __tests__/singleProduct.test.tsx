import { render, screen } from '@testing-library/react'
import { PRODUCT_QUERY } from '../src/lib/graphQL/queries/productQuery'
import { fakeProduct } from '../src/lib/testUtils'
import { MockedProvider } from '@apollo/client/testing'
import ProductCard from '../src/pages/products/ProductCard'
import SingleProduct from '../src/pages/products/SingleProduct'

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

describe('<SingleProduct />', () => {
	it('renders with correct data', async () => {
		const { container, debug } = render(
			<MockedProvider mocks={mocks}>
				<SingleProduct id="123" />
			</MockedProvider>
		)
		debug()
		await screen.findByTestId('single-product')
	})
})
