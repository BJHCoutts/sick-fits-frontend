import { render, screen } from '@testing-library/react'
import { fakeItem } from '../src/lib/testUtils'
import CreateProductForm from '../src/pages/sell/CreateProductForm'
import { MockedProvider } from '@apollo/client/testing'

const item = fakeItem()

jest.mock('next/router', () => ({
	useRouter: jest.fn(),
}))

describe('<CreateProduct/>', () => {
	it('renders and matches snapshot', () => {
		const { container, debug } = render(
			<MockedProvider>
				<CreateProductForm />
			</MockedProvider>
		)
		debug()
		expect(container).toMatchSnapshot()
	})
})
