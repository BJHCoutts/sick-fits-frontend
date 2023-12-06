import { gql } from "@apollo/client"

export const ALL_PRODUCTS_QUERY = gql`
	query ALL_PRODUCTSQUERY{
		allProducts {
			id
			name
			description
			photo {
				id
				image {
					id
					path
					filename
					mimetype
					encoding
					publicUrl
					publicUrlTransformed
				}
				altText
			}
			status
		}
	}
`