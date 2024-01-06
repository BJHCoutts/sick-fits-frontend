import { useCombobox } from 'downshift'
import { SDropDown, SDropDownItem, SSearch } from './styles/SDropDown'
import { SEARCH_ALL_PRODUCTS_QUERY } from '../lib/graphQL/queries/searchAllProductsQuery'
import { useLazyQuery } from '@apollo/client'
import { debounce } from '../lib/functions/debounce'
import { TProduct } from '../lib/types/TProduct'
import { useRouter } from 'next/router'

export default function Search() {
	const router = useRouter()
	const [findItems, { loading, data, error }] = useLazyQuery(
		SEARCH_ALL_PRODUCTS_QUERY,
		{
			fetchPolicy: 'no-cache',
		}
	)

	const items = data?.searchTerms || []

	const {
		getInputProps,
		getItemProps,
		highlightedIndex,
		isOpen,
		inputValue: globalInputValue,
	} = useCombobox({
		items,
		onInputValueChange({ inputValue }) {
			debounce(() => findItems({ variables: { searchTerm: inputValue } }), 350)
		},
		onSelectedItemChange({ selectedItem }: { selectedItem: TProduct }) {
			router.push({ pathname: `/product/${selectedItem.id}` })
		},
		itemToString: (item: TProduct) => item?.name || '',
	})

	return (
		<SSearch>
			<input
				{...getInputProps({
					type: 'search',
					placeholder: 'Search for an item',
					id: 'search',
					className: loading ? 'loading' : '',
				})}
			/>
			<SDropDown>
				{isOpen &&
					items.map((item: TProduct, index) => (
						<SDropDownItem
							key={item.id}
							{...getItemProps({ item })}
							highlighted={index === highlightedIndex}
						>
							<img
								src={item.photo.image.publicUrlTransformed}
								alt={item.name}
								width="50"
							/>
							{item.name}
						</SDropDownItem>
					))}
				{isOpen && !items.length && !loading && globalInputValue.length && (
					<SDropDownItem>Sorry, no items for {globalInputValue}</SDropDownItem>
				)}
			</SDropDown>
		</SSearch>
	)
}
