import { useQuery } from '@apollo/client'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ORDER_QUERY } from '../../lib/graphQL/queries/orderQuery'

export default function OrderPage() {
	const {
		query: { id },
	} = useRouter()

	const { data, error, loading } = useQuery(ORDER_QUERY, { variables: { id } })

	return (
		<>
			<Head>
				<title>Order Page</title>
			</Head>
			<div>what{id}</div>
		</>
	)
}
