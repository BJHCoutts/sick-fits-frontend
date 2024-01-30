import { render, screen, waitFor } from '@testing-library/react'
import { fakeItem } from '../src/lib/testUtils'
import CreateProductForm from '../src/pages/sell/CreateProductForm'
import { MockedProvider } from '@apollo/client/testing'
import userEvent from '@testing-library/user-event'
import { ALL_PRODUCTS_QUERY } from '../src/lib/graphQL/queries/allProductsQuery'
import wait from 'waait'
import { CREATE_PRODUCT_MUTATION } from '../src/lib/graphQL/mutations/createProductMutation'

const item = fakeItem()

jest.mock('next/router', () => ({
	useRouter: jest.fn(),
}))

const testImageFile = new File(['hello'], 'hello.png', {
	type: 'image/png',
})

const useRouter = jest.spyOn(require('next/router'), 'useRouter')

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
					query: CREATE_PRODUCT_MUTATION,
					variables: {
						name: item.name,
						description: item.description,
						image: testImageFile,
						price: item.price,
					},
				},
				result: {
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

		const push = jest.fn()

		useRouter.mockImplementation(() => ({
			push,
		}))

		await userEvent.type(screen.getByLabelText('Name'), item.name)
		await userEvent.type(screen.getByLabelText('Price'), item.price.toString())
		await userEvent.type(
			screen.getByLabelText(/description/i),
			item.description
		)

		const fileInput = screen.getByLabelText(/image/i) as HTMLInputElement

		if (fileInput.files) {
			expect(fileInput.files.length).toBe(0)
			await userEvent.upload(fileInput, testImageFile)
			expect(fileInput.files.length).toBe(1)
		}

		await userEvent.click(screen.getByText(/Add Product/i))

		// await waitFor(() => wait(5))

		// debug()

		// expect(push).toHaveBeenCalled()
	})
})
