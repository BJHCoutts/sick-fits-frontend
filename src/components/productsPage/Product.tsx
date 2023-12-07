import Link from 'next/link'
import { TProduct } from '../../lib/types/TProduct'
import SItem from '../styles/ItemStyles'
import STitle from '../styles/STitle'
import SPriceTag from '../styles/SPriceTag'
import formatMoney from '../../lib/functions/formatMoney'

interface IProduct {
	product: TProduct
}

export default function Product({ product }: IProduct) {
	return (
		<>
			<SItem>
				<img
					src={product.photo.image.publicUrlTransformed}
					alt={product.photo.altText}
				/>
				<STitle>
					<Link href={`/product/${product.id}`}>{product.name}</Link>
				</STitle>
				<SPriceTag>{formatMoney(product.price)}</SPriceTag>
			</SItem>
		</>
	)
}
