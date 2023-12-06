import { gql } from "@apollo/client"

export const ALL_PRODUCTS_QUERY = gql`
query ALL_PRODUCTS_QUERY{
  allProducts {
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
  }
}
`