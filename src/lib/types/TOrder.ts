import { TCartItem } from "./TCartItem"
import { TOrderItem } from "./TOrderItem"
import { TProduct } from "./TProduct"
import { TUser } from "./TUser"

export type TOrder = {
	id: string
	charge: number
	total: number
	user: TUser
	items: TOrderItem[]
}