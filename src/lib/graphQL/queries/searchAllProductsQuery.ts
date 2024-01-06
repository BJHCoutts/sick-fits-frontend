import { gql } from "@apollo/client"

export const SEARCH_ALL_PRODUCTS_QUERY = gql`
	query SEARCH_ALL_PRODUCTS_QUERY($searchTerm:String!) {
		searchTerms: allProducts (where: { 
			OR:[
				{name_contains_i: $searchTerm}, 
				{  description_contains_i: $searchTerm}
			]
		})
		{
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
		}
	}
`