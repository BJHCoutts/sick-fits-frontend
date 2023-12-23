import { gql } from "@apollo/client"

export const PAGINATION_QUERY = gql`
	query PAGINATION_QUERY{
		_allProductsMeta {
			count
		}
	}
`