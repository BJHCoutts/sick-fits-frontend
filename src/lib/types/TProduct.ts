export type TProduct = {
	id: string
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