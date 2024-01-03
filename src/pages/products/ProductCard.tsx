import Link from 'next/link'
import { TProduct } from '../../lib/types/TProduct'
import SItem from '../../components/styles/SItem'
import STitle from '../../components/styles/STitle'
import SPriceTag from '../../components/styles/SPriceTag'
import formatMoney from '../../lib/functions/formatMoney'
import DeleteProduct from './DeleteProduct'
import AddToCart from '../../components/AddToCart'

interface IProduct extends TProduct {}

export default function ProductCard({ product }: { product: IProduct }) {
	return (
		<SItem>
			<Link href={`/product/${product.id}`}>
				<img
					src={product?.photo?.image?.publicUrlTransformed}
					alt={product?.photo?.altText}
				/>

				{!product.photo && <h3 className="no-photo">No Photo</h3>}

				<STitle>
					<Link href={`/product/${product.id}`}>{product.name}</Link>
				</STitle>
				<SPriceTag>{formatMoney(product.price)}</SPriceTag>
				<p>{product.description}</p>
			</Link>
			<div className="button-list">
				<AddToCart productId={product.id} />
				<Link
					href={{
						pathname: '/update',
						query: { id: product.id },
					}}
				>
					Edit 📝
				</Link>
				<DeleteProduct id={product.id}>Delete ☠️</DeleteProduct>
			</div>
		</SItem>
	)
}
