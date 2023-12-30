import { gql } from "@apollo/client"

export const CURRENT_USER_QUERY = gql`
  query CURRENT_USER_QUERY {
    authenticatedItem {
      ... on User {
        id
        email
        name
        # TODO: Query the cart once we have it
      }
    }
  }
`