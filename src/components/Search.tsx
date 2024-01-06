import { useCombobox } from 'downshift'
import { SDropDown, SDropDownItem, SSearch } from './styles/SDropDown'
import { SEARCH_ALL_PRODUCTS_QUERY } from '../lib/graphQL/queries/searchAllProductsQuery'
import { useLazyQuery } from '@apollo/client'
import { debounce } from '../lib/functions/debounce'

export default function Search() {
	const [findItems, { loading, data, error }] = useLazyQuery(
		SEARCH_ALL_PRODUCTS_QUERY,
		{
			fetchPolicy: 'no-cache',
		}
	)

	const { getInputProps, getItemProps, inputValue } = useCombobox({
		items: [],
		onInputValueChange() {
			console.log('input changed')
			debounce(() => console.log('now'), 1000)
		},
		onSelectedItemChange() {
			console.log('selected item changed')
		},
	})

	function handleChange() {}

	return (
		<SSearch>
			<input
				{...getInputProps({
					type: 'search',
					placeholder: 'Search for an item',
					id: 'search',
					className: 'loading',
				})}
			/>
			<SDropDown>
				<SDropDownItem {...getItemProps}>1</SDropDownItem>
				<SDropDownItem {...getItemProps}>2</SDropDownItem>
				<SDropDownItem {...getItemProps}>3</SDropDownItem>
			</SDropDown>
		</SSearch>
	)
}
