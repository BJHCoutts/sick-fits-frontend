import { createContext, useContext, useState } from 'react'

const LocalStateContext = createContext(null)
const LocalStateProvider = LocalStateContext.Provider

function CartStateProvider({ children }) {
	const [cartOpen, setCartOpen] = useState(true)
	function toggleCart() {
		setCartOpen(!cartOpen)
	}
	function closeCart() {
		setCartOpen(false)
	}
	function openCart() {
		setCartOpen(true)
	}

	return (
		<LocalStateProvider value={{ cartOpen, toggleCart, closeCart, openCart }}>
			{children}
		</LocalStateProvider>
	)
}

function useCart() {
	// this is the consumer to access state
	const all = useContext(LocalStateContext)
	return all
}

export { CartStateProvider, useCart }
