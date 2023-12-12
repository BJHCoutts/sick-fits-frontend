import { useMutation } from '@apollo/client'
import SForm from '../../components/styles/SForm'
import useForm from '../../lib/functions/useForm'
import { CREATE_PRODUCT_MUTATION } from '../../lib/graphQL/mutations/createProductMutation'
import DisplayError from '../../components/ErrorMessage'

export default function CreateProduct() {
	const { inputs, handleChange, clearForm, resetForm } = useForm({
		image: '',
		name: '',
		price: '',
		description: '',
	})

	const [createProduct, { loading, error, data }] = useMutation(
		CREATE_PRODUCT_MUTATION,
		{
			variables: inputs,
		}
	)

	return (
		<>
			<SForm
				onSubmit={async (e) => {
					e.preventDefault()
					const res = await createProduct()
					clearForm()
				}}
			>
				<DisplayError error={error} />
				<fieldset disabled={loading} aria-busy={loading}>
					<label htmlFor="image">
						Image
						<input
							type="file"
							id="image"
							name="image"
							onChange={handleChange}
						/>
					</label>
					<label htmlFor="name">
						Name
						<input
							type="text"
							id="name"
							name="name"
							placeholder="name"
							value={inputs.name}
							onChange={handleChange}
							required
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
							required
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
						<button type="submit" onClick={() => console.log('Add Product')}>
							+ Add Product
						</button>
					</div>
				</fieldset>
			</SForm>
		</>
	)
}
