import { gql } from "@apollo/client"

export const CURRENT_USER_QUERY = gql`
  query CURRENT_USER_QUERY {
    authenticatedItem {
      ... on User {
        id
        email
        name
        cart {
          id
          quantity
          product {
            id
            name
            description
            price
            photo {
              id
              altText
              image {
                publicUrlTransformed
              }
            }
          }
        }
      }
    }
  }
`