import { render } from '@testing-library/react'
import React from 'react'
import ProductCard from '../src/pages/products/ProductCard'
import { fakeItem, fakeProduct } from '../src/lib/testUtils'
import { MockedProvider } from '@apollo/client/testing'

describe('<Product/>', () => {
	it('renders out the price and title', () => {
		const { container, debug } = render(
			<MockedProvider>
				<ProductCard product={fakeProduct} />
			</MockedProvider>
		)
		debug()
	})
})
