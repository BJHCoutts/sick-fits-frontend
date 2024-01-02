import { TCartItem } from "./TCartItem"

export type TUser = {
	id: string
	email: string
	name: string
	cart: TCartItem[]
}