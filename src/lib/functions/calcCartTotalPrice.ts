import { TCartItem } from "../types/TCartItem"

export default function calcCartTOtalPrice ( cart: TCartItem[] )
{
	return cart.reduce( (tally, cartItem) => {
		if ( !cartItem ) return tally
		return tally + (cartItem.quantity) * (cartItem.product.price)
	}, 0)
}