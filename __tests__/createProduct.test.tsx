import { render, screen, waitFor } from '@testing-library/react'
import { fakeItem } from '../src/lib/testUtils'
import CreateProductForm from '../src/pages/sell/CreateProductForm'
import { MockedProvider } from '@apollo/client/testing'
import userEvent from '@testing-library/user-event'
import { ALL_PRODUCTS_QUERY } from '../src/lib/graphQL/queries/allProductsQuery'
import wait from 'waait'
import { useRouter } from 'next/router'

const item = fakeItem()

// const pushMock = jest.fn()

// jest.mock('next/router', () => ({
//   useRouter: jest.fn()
// }))

// jest.mock('next/router', () => ({
// 	useRouter() {
// 		return {
// 			push: pushMock,
// 		}
// 	},
// }))

jest.mock('next/router', () => {
	const router = {
		push: jest.fn(),
	}
	return {
		useRouter: jest.fn().mockReturnValue(router),
	}
})

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
		expect(screen.getByDisplayValue(item.price.toString())).toBeInTheDocument()
	})

	it('creates an item when the form is submitted', async () => {
		const mocks = [
			{
				request: {
					data: {
						createProduct: {
							...item,
							id: 'abc123',
							__typename: 'Item',
						},
					},
				},
			},
			{
				request: {
					query: ALL_PRODUCTS_QUERY,
					variables: { skip: 0, first: 2 },
				},
				result: {
					data: {
						allProducts: [item],
					},
				},
			},
		]

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

		await userEvent.click(screen.getByText(/Add Product/i))

		await waitFor(() => wait(0))

		expect(useRouter().push).toHaveBeenCalled()
	})
})
