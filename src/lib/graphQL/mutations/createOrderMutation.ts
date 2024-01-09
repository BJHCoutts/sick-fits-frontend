import { gql } from "@apollo/client"

export const CREATE_ORDER_MUTATION = gql`
	mutation CREATE_ORDER_MUTATION($token:String!) {
  checkout (token:$token) {
    id
    charge
    total
    items{
      id
      name
    }
  }
}
`