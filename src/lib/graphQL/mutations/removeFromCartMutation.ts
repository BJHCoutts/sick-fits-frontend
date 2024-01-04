import { gql } from "@apollo/client"

export const REMOVE_FROM_CART_MUTATION = gql`
	mutation REMOVE_FROM_CART_MUTATION ($id:ID!){
		deleteCartItem (id:$id) {
			id
			quantity
			product {
				name
			}
		}
	}
`