import Link from 'next/link'
import { TProduct } from '../../lib/types/TProduct'
import SItem from '../../components/styles/SItem'
import STitle from '../../components/styles/STitle'
import SPriceTag from '../../components/styles/SPriceTag'
import formatMoney from '../../lib/functions/formatMoney'

interface IProduct extends TProduct {}

export default function ProductCard({ product }: { product: IProduct }) {
	return (
		<Link href={`/products/${product.id}`}>
			<SItem>
				<img
					src={product?.photo?.image.publicUrlTransformed}
					alt={product?.photo?.altText}
				/>

				{!product.photo && <h3 className="no-photo">No Photo</h3>}

				<STitle>
					<Link href={`/product/${product.id}`}>{product.name}</Link>
				</STitle>
				<SPriceTag>{formatMoney(product.price)}</SPriceTag>
				<p>{product.description}</p>
				<div className="buttonlist">
					<Link
						href={{
							pathname: '/update',
							query: { id: product.id },
						}}
					>
						Edit 📝
					</Link>
				</div>
			</SItem>
		</Link>
	)
}
