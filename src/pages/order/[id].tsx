import { useQuery } from '@apollo/client'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ORDER_QUERY } from '../../lib/graphQL/queries/orderQuery'
import DisplayError from '../../components/ErrorMessage'
import SOrder from '../../components/styles/SOrder'
import { TOrder } from '../../lib/types/TOrder'
import formatMoney from '../../lib/functions/formatMoney'

export default function OrderPage() {
	const {
		query: { id },
	} = useRouter()

	const { data, error, loading } = useQuery(ORDER_QUERY, { variables: { id } })

	if (loading) return <p>Loading...</p>
	if (error) return <DisplayError error={error} />
	const { order }: { order: TOrder } = data

	return (
		<>
			<Head>
				<title>Sick Fits | Order #{}</title>
			</Head>
			<SOrder>
				<p>
					<span>Order Id:</span>
					<span>{order.id}</span>
				</p>
				<p>
					<span>Order Charge:</span>
					<span>{formatMoney(order.total)}</span>
				</p>
				<p>
					<span>Order Total:</span>
					<span>{formatMoney(order.total)}</span>
				</p>
				<p>
					<span>Order Item Count:</span>
					<span>{order.items.length} Items</span>
				</p>
				<ul className="items">
					{order.items.map((item) => (
						<li className="order-item" key={item.id}>
							<img
								src={item.photo.image.publicUrlTransformed}
								alt={item.name}
							/>
							<div className="item-details">
								<h2>{item.name}</h2>
								<p>Qty: {item.quantity}</p>
								<p>Each: {formatMoney(item.price)}</p>
								<p>Sub Total: {formatMoney(item.price * item.quantity)}</p>
								<p>{item.description}</p>
							</div>
						</li>
					))}
				</ul>
			</SOrder>
		</>
	)
}
