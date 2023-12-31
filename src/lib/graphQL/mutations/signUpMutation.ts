import { gql } from "@apollo/client"

export const SIGN_UP_MUTATION = gql`
	mutation SIGN_UP_MUTATION($email: String!, $name: String!, $password: String!) {
		createUser(data:{
			name:$name
			email:$email
			password:$password
		}) {
			id
			name
			email
		}
	}
`