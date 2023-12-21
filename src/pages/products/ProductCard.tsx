import Link from 'next/link'
import { TProduct } from '../../lib/types/TProduct'
import SItem from '../../components/styles/SItem'
import STitle from '../../components/styles/STitle'
import SPriceTag from '../../components/styles/SPriceTag'
import formatMoney from '../../lib/functions/formatMoney'
import DeleteProduct from './DeleteProduct'

interface IProduct extends TProduct {}

export default function ProductCard({ product }: { product: IProduct }) {
	return (
		<SItem>
			<Link href={`/products/${product.id}`}>
				<img
					src={product?.photo?.image?.publicUrlTransformed}
					alt={product?.photo?.altText}
				/>

				{!product.photo && <h3 className="no-photo">No Photo</h3>}

				<STitle>
					<Link href={`/products/${product.id}`}>
						{product.name} - {product.id}
					</Link>
				</STitle>
				<SPriceTag>{formatMoney(product.price)}</SPriceTag>
				<p>{product.description}</p>
			</Link>
			<div className="button-list">
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
