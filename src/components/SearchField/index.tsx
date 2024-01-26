import {
	memo,
	type Dispatch,
	type SetStateAction,
	type SyntheticEvent
} from 'react'

import SearchIcon from 'assets/icon-search.svg'

import * as C from './styles'

interface Props {
	inputValue: string
	setInputValue: Dispatch<SetStateAction<string>>
}

const onSubmit = (event: SyntheticEvent) => {
	event.preventDefault()
}

function SearchField({ inputValue, setInputValue }: Props) {
	const handleInputChange = (event: SyntheticEvent) => {
		const target = event.target as HTMLInputElement
		setInputValue(target.value)
	}

	return (
		<C.Container onSubmit={onSubmit}>
			<C.InputText
				onChange={handleInputChange}
				placeholder='Search pokemon'
				value={inputValue}
				required
			/>
			<C.SearchButton>
				<SearchIcon />
			</C.SearchButton>
		</C.Container>
	)
}

export default memo(SearchField)
