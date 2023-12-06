import { TProduct } from '../../lib/types/product'
import SItem from '../styles/ItemStyles'

interface IProduct {
	product: TProduct
}

export default function Product({ product }: IProduct) {
	return (
		<>
			<SItem>{product.name}</SItem>
		</>
	)
}
