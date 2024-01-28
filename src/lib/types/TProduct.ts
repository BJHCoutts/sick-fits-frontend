import { TUser } from './TUser'

export type TProduct = {
	__typename?: string
	id: string
	name: string
	description: string
	price: number
	photo: {
		id: string
		image: {
			id?: string
			publicUrlTransformed: string
		}
		altText: string
	}
	status?: string
	user?: null | TUser
}
