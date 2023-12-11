import SForm from '../../components/styles/SForm'
import useForm from '../../lib/functions/useForm'

export default function CreateProduct() {
	const { inputs, handleChange, clearForm, resetForm } = useForm({
		image: '',
		name: 'Sample Product Name',
		price: '50',
		description: 'Description of product.',
	})

	return (
		<>
			<SForm
				onSubmit={(e) => {
					e.preventDefault()
					console.log(inputs)
				}}
			>
				<fieldset>
					<label htmlFor="image">
						Image
						<input
							type="file"
							id="image"
							name="image"
							onChange={handleChange}
							required
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
					<button type="button" onClick={clearForm}>
						Clear Form
					</button>
					<button type="button" onClick={resetForm}>
						Reset Form
					</button>
					<button type="submit" onClick={() => console.log('Add Product')}>
						+ Add Product
					</button>
				</fieldset>
			</SForm>
		</>
	)
}
