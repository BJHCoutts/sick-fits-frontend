import { MockedProvider } from '@apollo/client/testing'
import { render, screen } from '@testing-library/react'
import { makePaginationMocksFor } from '../src/lib/testUtils'
import Pagination from '../src/pages/products/Pagination'

describe('<Pagination />', () => {
	it('displays a loading message', () => {
		const { container } = render(
			<MockedProvider mocks={makePaginationMocksFor(1)}>
				<Pagination page={1} />
			</MockedProvider>
		)
		expect(container).toHaveTextContent('Loading...')
	})
	it('renders pagination for 18 items', async () => {
		const { container, debug } = render(
			<MockedProvider mocks={makePaginationMocksFor(18)}>
				<Pagination page={1} />
			</MockedProvider>
		)
		await screen.findByTestId('pagination')
		expect(container).toHaveTextContent('Page 1 of 5')
		const pageCountSpan = screen.getByTestId('pageCount')
		expect(pageCountSpan).toHaveTextContent('5')
		expect(container).toMatchSnapshot()
	})
})
