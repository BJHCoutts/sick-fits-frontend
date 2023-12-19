import { gql } from "@apollo/client"

export const DELETE_PRODUCT_MUTATION = gql`
	mutation DELETE_PRODUCT_MUTATION ($id:ID!) {
  deleteProduct (id: $id) {
    id
    name
  }
}
`