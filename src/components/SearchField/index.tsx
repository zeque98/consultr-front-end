import type { SyntheticEvent } from 'react'
import { useState } from 'react'

import { fetchPokemon } from '../../api/fetchPokemon'
import SearchIcon from '../../assets/icon-search.svg?react'
import type { Pokemon } from '../../types/Pokemon'
import * as C from './styles'

interface SearchFieldProps {
	setPokemonList: (data: Pokemon[]) => void
	setError: (value: boolean) => void
	setLoading: (value: boolean) => void
}

export function SearchField(props: SearchFieldProps) {
	const [inputValue, setInputValue] = useState('')

	const handleSubmit = async (e: SyntheticEvent) => {
		e.preventDefault()

		props.setLoading(true)
		const requestPokemon = await fetchPokemon(inputValue.toLowerCase())

		requestPokemon.response.ok
			? props.setPokemonList([requestPokemon.data])
			: props.setError(requestPokemon.error)

		props.setLoading(false)
		setInputValue('')
	}

	return (
		<C.Container onSubmit={handleSubmit}>
			<C.InputText
				onChange={e => setInputValue(e.target.value)}
				placeholder='Pesquisar Pokémon'
				value={inputValue}
				required
			/>
			<C.SearchButton>
				<SearchIcon />
			</C.SearchButton>
		</C.Container>
	)
}
