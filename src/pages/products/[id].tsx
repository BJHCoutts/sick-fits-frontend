import Head from 'next/head'
import { useRouter } from 'next/router'
import SingleProduct from './SingleProduct'

export default function ProductPage() {
	const {
		query: { id },
	} = useRouter()
	// maybe lookup here so product title can be the page head title
	return (
		<>
			<Head>
				<title>Product Page</title>
			</Head>

			<SingleProduct id={id} />
		</>
	)
}
