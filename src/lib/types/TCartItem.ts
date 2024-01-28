import { TProduct } from './TProduct'
import { TUser } from './TUser'

export type TCartItem = {
	__typename?: string
	id: string
	quantity: number
	product: TProduct
	user?: TUser
}
