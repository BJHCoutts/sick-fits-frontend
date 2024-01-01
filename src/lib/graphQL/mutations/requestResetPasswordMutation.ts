import { gql } from "@apollo/client"

export const REQUEST_RESET_PASSWORD_MUTATION = gql`
	mutation REQUEST_RESET_PASSWORD_MUTATION($email: String!) {
		sendUserPasswordResetLink (email:$email) {
      code
      message
    }
	}
`