const render = require('@testing-library/react')
// import { render } from '@testing-library/react'
const fakeItem = require('../src/lib/testUtils')
// import { fakeItem } from '../src/lib/testUtils'
// import ProductCard from '../src/pages/products/ProductCard'

const product = fakeItem()

describe('<Product />', () => {
	it('renders out the price tag and title', () => {
		const { container, debug } = render(<p>hi</p>)
		debug()
		// const { container, debug } = render(<ProductCard product={fakeProduct} />)
		// debug()
		// expect(container).toMatchSnapshot()
	})
})
