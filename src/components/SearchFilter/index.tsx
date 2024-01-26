import {
	useCallback,
	type Dispatch,
	type SetStateAction,
	type SyntheticEvent
} from 'react'

import type { Pokemon } from 'types/Pokemon'
import { pokemonTypes } from 'utils/pokemonTypes'

import PokemonType from '../PokemonType'
import Slide from '../Slide'
import * as C from './styles'

interface Props {
	setPage: Dispatch<SetStateAction<number>>
	setPokemonListByType: Dispatch<SetStateAction<Pokemon[]>>
	setPokemonName: Dispatch<SetStateAction<string>>
	setSelectedType: Dispatch<SetStateAction<string>>
}

function SearchFilter({
	setPage,
	setPokemonListByType,
	setPokemonName,
	setSelectedType
}: Props) {
	const handleClick = useCallback(
		async (event: SyntheticEvent) => {
			const typeName = (event.currentTarget as HTMLButtonElement).value
			setSelectedType(typeName)
			setPokemonListByType([])
			setPokemonName('')
			setPage(1)
		},
		[setPage, setPokemonListByType, setPokemonName, setSelectedType]
	)

	return (
		<C.Container>
			<C.Title>Filter by type</C.Title>
			<Slide>
				{pokemonTypes.map(({ name }) => (
					<PokemonType handleClick={handleClick} key={name} type={name} />
				))}
			</Slide>
		</C.Container>
	)
}

export default SearchFilter
