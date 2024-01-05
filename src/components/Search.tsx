import { resetIdCounter, useCombobox } from 'downshift'
import { SDropDown, SDropDownItem, SSearch } from './styles/SDropDown'

export default function Search() {
	resetIdCounter()
	const { getMenuProps, getInputProps, getItemProps } = useCombobox({
		items: [],
		onInputValueChange() {
			console.log('input changed')
		},
		onSelectedItemChange() {
			console.log('selected item changed')
		},
	})
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
			<SDropDown {...getMenuProps}>
				<SDropDownItem {...getItemProps}>1</SDropDownItem>
				<SDropDownItem {...getItemProps}>2</SDropDownItem>
				<SDropDownItem {...getItemProps}>3</SDropDownItem>
			</SDropDown>
		</SSearch>
	)
}
