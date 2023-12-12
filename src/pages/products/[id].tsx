import { useRouter } from 'next/router'

export default function ProductPage() {
	const {
		query: { id },
	} = useRouter()
	return (
		<>
			<h1>I'm a product of id {id}!</h1>
		</>
	)
}
