import { render } from '@testing-library/react'
import CartCount from '../src/components/CartCount'

describe('<CartCount />', () => {
	it('renders', () => {
		render(<CartCount count={10} />)
	})
	it('matches snapshot', () => {
		const { container } = render(<CartCount count={12} />)
		expect(container).toMatchSnapshot()
	})
	it('updates via props', () => {
		const { container } = render(<CartCount count={12} />)
		expect(container.textContent).toBe('12')
		expect(container).toHaveTextContent('12')
	})
})
