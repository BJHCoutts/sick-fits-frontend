import { render, screen } from '@testing-library/react'
import { fakeItem } from '../src/lib/testUtils'
import CreateProductForm from '../src/pages/sell/CreateProductForm'
import { MockedProvider } from '@apollo/client/testing'
import userEvent from '@testing-library/user-event'

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
		expect(container).toMatchSnapshot()
	})
	it('handles the updating', async () => {
		const { container, debug } = render(
			<MockedProvider>
				<CreateProductForm />
			</MockedProvider>
		)

		await userEvent.type(screen.getByLabelText('Name'), item.name)
		await userEvent.type(screen.getByLabelText('Price'), item.price.toString())
		await userEvent.type(
			screen.getByLabelText(/description/i),
			item.description
		)

		expect(screen.getByDisplayValue(item.name)).toBeInTheDocument()
	})
})
