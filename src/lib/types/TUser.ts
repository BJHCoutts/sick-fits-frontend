import { TCartItem } from './TCartItem'

export type TUser = {
	__typename?: string
	id: string
	email: string
	name: string
	cart: TCartItem[]
	permissions: string[]
	orders?: []
}
