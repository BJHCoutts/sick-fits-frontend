import {
	CardElement,
	Elements,
	useElements,
	useStripe,
} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import styled from 'styled-components'
import SickButton from './styles/SickButton'
import { useState } from 'react'
import nProgress from 'nprogress'
import { useMutation } from '@apollo/client'
import { CREATE_ORDER_MUTATION } from '../lib/graphQL/mutations/createOrderMutation'

const stripeLib = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY)

function CheckoutForm() {
	const [error, setError] = useState()
	const [loading, setLoading] = useState(false)
	const stripe = useStripe()
	const elements = useElements()
	const [checkout, { error: checkoutError }] = useMutation(
		CREATE_ORDER_MUTATION
	)

	async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
		e.preventDefault()
		if (!stripe || !elements) {
			// Stripe.js hasn't yet loaded.
			// Make sure to disable form submission until Stripe.js has loaded.
			return
		}
		setLoading(true)
		nProgress.start()

		const { error, paymentMethod } = await stripe?.createPaymentMethod({
			type: 'card',
			card: elements?.getElement(CardElement),
		})

		if (error) {
			// Show error to your customer (for example, payment details incomplete)
			setError(error)
			nProgress.done()
			return
		}

		const order = await checkout({
			variables: {
				token: paymentMethod.id,
			},
		})

		nProgress.done()
		setLoading(false)
	}

	return (
		<SCheckoutForm onSubmit={handleSubmit}>
			{error && <p style={{ fontSize: '1rem' }}>{error.message}</p>}
			{checkoutError && (
				<p style={{ fontSize: '1rem' }}>{checkoutError.message}</p>
			)}
			<SickButton disabled={loading}>Checkout Now</SickButton>
		</SCheckoutForm>
	)
}

export default function Checkout() {
	return (
		<Elements stripe={stripeLib}>
			<CardElement />
			<CheckoutForm />
		</Elements>
	)
}

const SCheckoutForm = styled.form`
	box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.04);
	border: 1px 2px 2px rgba(0, 0, 0, 0.06);
	border-radius: 5px;
	padding: 1rem;
	display: grid;
	grid-gap: 1rem;
`
