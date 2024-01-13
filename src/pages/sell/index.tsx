import Head from 'next/head'
import CreateProductForm from './CreateProductForm'
import PleaseSignIn from '../../components/PleaseSignIn'

export default function SellIndexPage() {
	return (
		<>
			<Head>
				<title>Sell Page</title>
			</Head>
			<h1>Sell</h1>
			<PleaseSignIn>
				<CreateProductForm />
			</PleaseSignIn>
		</>
	)
}
