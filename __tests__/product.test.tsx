import { render, screen } from '@testing-library/react'
import React from 'react'
import ProductCard from '../src/pages/products/ProductCard'
import { fakeProduct } from '../src/lib/testUtils'
import { MockedProvider } from '@apollo/client/testing'

describe('<ProductCard/>', () => {
	it('renders out the price and title', () => {
		const { container, debug } = render(
			<MockedProvider>
				<ProductCard product={fakeProduct} />
			</MockedProvider>
		)
		const priceTag = screen.getByText('$50')
		expect(priceTag).toBeInTheDocument()
		const link = container.querySelector('a')
		if (link) {
			expect(link).toHaveAttribute('href', '/product/abc123')
		}
		expect(container).toHaveTextContent(fakeProduct.name)
	})
})

it('Renders and matches HTML Snapshot', () => {
	const { container, debug } = render(
		<MockedProvider>
			<ProductCard product={fakeProduct} />
		</MockedProvider>
	)
	expect(container).toMatchSnapshot()
})

it('Renders the image properly', () => {
	const { container, debug } = render(
		<MockedProvider>
			<ProductCard product={fakeProduct} />
		</MockedProvider>
	)
	const img = screen.getByAltText(fakeProduct.name)
	expect(img).toBeInTheDocument()
})
