import { ChangeEvent, useEffect, useState } from 'react'

export default function useForm(initial = {}) {
	const [inputs, setInputs] = useState(initial)
	const initialValues = Object.values(initial).join('')

	useEffect(() => {
		setInputs(initial)
	}, [initialValues])

	function handleChange(
		e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
	) {
		let {
			value,
			name,
			type,
		}: { value: string | number; name: string; type: string } = e.target
		if (type === 'number') {
			value = parseInt(value)
		}
		if (type === 'file') {
			;[value] = e.target.files
		}
		setInputs({
			...inputs,
			[name]: value,
		})
	}

	function resetForm() {
		setInputs(initial)
	}

	function clearForm() {
		const blankState = Object.fromEntries(
			Object.entries(inputs).map(([key, value]) => [key, ''])
		)
		setInputs(blankState)
	}

	return {
		inputs,
		handleChange,
		resetForm,
		clearForm,
	}
}
