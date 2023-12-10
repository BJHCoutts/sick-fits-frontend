import Link from 'next/link'
import { TProduct } from '../../lib/types/TProduct'
import SItem from '../../components/styles/ItemStyles'
import STitle from '../../components/styles/STitle'
import SPriceTag from '../../components/styles/SPriceTag'
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