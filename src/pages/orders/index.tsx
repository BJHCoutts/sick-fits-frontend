import { useQuery } from '@apollo/client'
import Head from 'next/head'
import DisplayError from '../../components/ErrorMessage'
import SOrder from '../../components/styles/SOrder'
import { TOrder } from '../../lib/types/TOrder'
import formatMoney from '../../lib/functions/formatMoney'
import { USER_ORDERS_QUERY } from '../../lib/graphQL/queries/userOrdersQuery'
import styled from 'styled-components'
import SOrderItem from '../../components/styles/SOrderItem'
import Link from 'next/link'

function countItemsPerOrder(order: TOrder) {
	return order.items.reduce((tally, item) => tally + item.quantity, 0)
}

export default function OrdersPage() {
	const { data, error, loading } = useQuery(USER_ORDERS_QUERY)

	if (loading) return <p>Loading...</p>
	if (error) return <DisplayError error={error} />
	const { allOrders }: { allOrders: TOrder[] } = data

	return (
		<>
			<Head>
				<title>{`Your Orders ${allOrders.length}`}</title>
			</Head>
			<h2>You Have {allOrders.length} Orders</h2>
			<SOrderUl>
				{allOrders.map((order) => {
					return (
						<SOrderItem>
							<Link href={`/order/${order.id}`}>
								<div className="order-meta">
									<p>
										{countItemsPerOrder(order)} Product
										{order.items.length > 1 ? 's' : ''}
									</p>
									<div className="images">
										{order.items.map((item) => (
											<img
												key={`image-${item.id}`}
												src={item.photo?.image?.publicUrlTransformed}
												alt={item.name}
											/>
										))}
									</div>
									<p>{formatMoney(order.total)}</p>
								</div>
							</Link>
						</SOrderItem>
					)
				})}
			</SOrderUl>
		</>
	)
}

const SOrderUl = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
	grid-gap: 4rem;
`
