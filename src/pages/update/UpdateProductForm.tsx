import { useRouter } from 'next/router'
import DisplayError from '../../components/ErrorMessage'
import { TProduct } from '../../lib/types/TProduct'
import { useMutation, useQuery } from '@apollo/client'
import { PRODUCT_QUERY } from '../../lib/graphQL/queries/productQuery'
import SForm from '../../components/styles/SForm'
import { UPDATE_PRODUCT_MUTATION } from '../../lib/graphQL/mutations/updateProductMutation'
import useForm from '../../lib/functions/useForm'
import { ALL_PRODUCTS_QUERY } from '../../lib/graphQL/queries/allProductsQuery'

export default function UpdateProductForm() {
	const {
		query: { id },
	} = useRouter()

	const {
		data: productData,
		error: productError,
		loading: productLoading,
	} = useQuery(PRODUCT_QUERY, {
		variables: { id },
	})

	const { inputs, handleChange, clearForm } = useForm({
		image: '',
		name: '',
		price: '',
		description: '',
	})

	const [
		updateProduct,
		{ data: updateData, error: updateError, loading: updateLoading },
	] = useMutation(UPDATE_PRODUCT_MUTATION, {
		variables: {
			id,
			...inputs,
			price: parseInt(inputs.price),
			refetchQueries: [{ query: ALL_PRODUCTS_QUERY }],
		},
	})

	if (productLoading) return <p>Product Loading...</p>
	if (productError) return <DisplayError error={productError} />

	const { Product }: { Product: TProduct } = productData

	return (
		<>
			<SForm
				onSubmit={async (e) => {
					e.preventDefault()
					const res = await updateProduct()
				}}
			>
				<h1>Update {Product.name}</h1>
				<DisplayError error={updateError} />
				<fieldset disabled={updateLoading} aria-busy={updateLoading}>
					{/* <label htmlFor="image">
						Image
						<input
							type="file"
							id="image"
							name="image"
							onChange={handleChange}
						/>
					</label> */}
					<label htmlFor="name">
						Name
						<input
							type="text"
							id="name"
							name="name"
							placeholder="name"
							value={inputs.name}
							onChange={handleChange}
						/>
					</label>
					<label htmlFor="price">
						Price
						<input
							type="number"
							id="price"
							name="price"
							placeholder="0"
							value={inputs.price}
							onChange={handleChange}
						/>
					</label>
					<label htmlFor="description">
						Description
						<textarea
							id="description"
							name="description"
							placeholder="description"
							value={inputs.description}
							onChange={handleChange}
						/>
					</label>

					<div className="button-container">
						<button type="button" onClick={clearForm}>
							Clear Form
						</button>
						<button type="submit">Update Product</button>
					</div>
				</fieldset>
			</SForm>
		</>
	)
}
