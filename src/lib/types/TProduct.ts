export type TProduct = {
	id: number
	name: string
	description: string
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