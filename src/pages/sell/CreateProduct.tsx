import SForm from '../../components/styles/SForm'
import useForm from '../../lib/functions/useForm'

export default function CreateProduct() {
	const { inputs, handleChange, clearForm, resetForm } = useForm({
		name: 'Sample Product Name',
		price: '50',
		description: 'Description of product.',
	})

	return (
		<>
			<SForm action="">
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
					<input
						type="text"
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
			</SForm>
		</>
	)
}
