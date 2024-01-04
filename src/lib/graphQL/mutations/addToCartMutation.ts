import { gql } from "@apollo/client"

export const ADD_TO_CART_MUTATION = gql`
	mutation ADD_TO_CART_MUTATION($productId: ID!) {
		addToCart(productId: $productId) {
			id
		}
	}
`