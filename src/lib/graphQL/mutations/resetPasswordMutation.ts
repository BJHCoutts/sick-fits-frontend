import { gql } from "@apollo/client"

export const RESET_PASSWORD_MUTATION = gql`
	mutation RESET_PASSWORD_MUTATION(
		$email: String!, 
		$password: String!, 
		$token: String!
	) {
		redeemUserPasswordResetToken(
			email: $email
			password: $password
			token: $token
		) {
			code
			message
		}
	}
`