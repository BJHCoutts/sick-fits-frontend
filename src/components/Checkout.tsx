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

const stripeLib = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY)

function CheckoutForm() {
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(false)
	const stripe = useStripe()
	const elements = useElements()

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

		console.log({ paymentMethod })

		if (error) {
			// Show error to your customer (for example, payment details incomplete)
			console.log(error.message)
		} else {
			// Your customer will be redirected to your `return_url`. For some payment
			// methods like iDEAL, your customer will be redirected to an intermediate
			// site first to authorize the payment, then redirected to the `return_url`.
		}
	}

	return (
		<SCheckoutForm onSubmit={handleSubmit}>
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
