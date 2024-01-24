export type TProduct = {
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
}