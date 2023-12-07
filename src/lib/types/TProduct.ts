export type TProduct = {
	id: number
	name: string
	description: string
	price: number
	photo: {
		id: number
		image: {
			id: number
			publicUrlTransformed: string
		}
		altText: string
	}
	status: string
}