import { TProduct } from '../../lib/types/TProduct'
import SItem from '../styles/ItemStyles'

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
				{product.name}
			</SItem>
		</>
	)
}
