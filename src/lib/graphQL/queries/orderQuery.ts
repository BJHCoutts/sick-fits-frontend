import { gql } from "@apollo/client"

export const ORDER_QUERY = gql`
	query ORDER_QUERY ($id:String!) {
		Order (where:{id:$id}) {
			id
			charge
			total
			user {
				id
			}
			items {
				id
				name
				description
				price
				quantity
				photo
					image {
						publicUrlTransformed
					}
				}  
			}
		}
	}
`