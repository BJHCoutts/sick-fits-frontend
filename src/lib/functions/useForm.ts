import { ChangeEvent, useState } from 'react'

export default function useForm ( initial = {} )
{
	const [ inputs, setInputs ] = useState( initial )
	
	function handleChange ( e: ChangeEvent<HTMLInputElement> )
	{
		let { value, name, type }:{ value:string|number, name:string, type: string} = e.target 
		if ( type === 'number' )
		{
			value = parseInt(value)
		}
		if ( type === 'file' )
		{
			[value] = e.target.files
		}
		setInputs( {
			...inputs,
			[name]: value
		})
	}

	function resetForm ()
	{
		setInputs(initial)
	}

	function clearForm ()
	{
		const blankState = Object.fromEntries(
			Object.entries(inputs).map(( [ key, value ] ) => [key, ''])
		)
		setInputs(blankState)
	}

	return {
		inputs, handleChange, resetForm, clearForm
	}
}