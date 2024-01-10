import { useQuery } from '@apollo/client'
import Head from 'next/head'
import DisplayError from '../../components/ErrorMessage'
import SOrder from '../../components/styles/SOrder'
import { TOrder } from '../../lib/types/TOrder'
import formatMoney from '../../lib/functions/formatMoney'
import { USER_ORDERS_QUERY } from '../../lib/graphQL/queries/userOrdersQuery'

export default function OrdersPage() {
	const { data, error, loading } = useQuery(USER_ORDERS_QUERY)

	if (loading) return <p>Loading...</p>
	if (error) return <DisplayError error={error} />
	const { allOrders }: { allOrders: TOrder[] } = data

	return (
		<>
			<Head>
				<title>Sick Fits | Orders</title>
			</Head>
			<div>{allOrders.length}</div>
		</>
	)
}
