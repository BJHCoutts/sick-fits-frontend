import { gql } from "@apollo/client"

export const PRODUCT_QUERY = gql`
	query PRODUCT_QUERY ({
		$id: string!
		}){
		Product (where: {id: $id}) {
			id
			name
			description
			photo {
				id
				image {
					id
					publicUrlTransformed
				}
				altText
			}
			status
			price
		}
	}
`