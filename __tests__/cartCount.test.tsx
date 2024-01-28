import { render, screen, waitFor } from '@testing-library/react'
import CartCount from '../src/components/CartCount'

describe('<CartCount />', () => {
	it('renders', () => {
		render(<CartCount count={10} />)
	})
	it('matches snapshot', () => {
		const { container } = render(<CartCount count={12} />)
		expect(container).toMatchSnapshot()
	})
	it('updates via props', async () => {
		const { container, rerender, debug } = render(<CartCount count={12} />)
		expect(container.textContent).toBe('12')
		expect(container).toHaveTextContent('12')
		rerender(<CartCount count={13} />)
		await screen.findByText('13')
		await waitFor(() => {
			expect(container.textContent).toBe('13')
		})
	})
})
