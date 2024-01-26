import { memo } from 'react'

import type { Pokemon } from 'types/Pokemon'

import { ErrorMessage } from '../ErrorMessage'
import { Loading } from '../Loading'
import PokemonCard from '../PokemonCard'
import * as C from './styles'

interface Props {
	error: boolean
	isFilterByType: boolean
	loading: boolean
	pokemon?: Pokemon
	pokemonList?: Pokemon[]
}

function Pokedex({
	error,
	isFilterByType,
	loading,
	pokemon,
	pokemonList
}: Props) {
	if (error) return <ErrorMessage />
	if (!isFilterByType && loading) return <Loading />

	if (pokemon) {
		return (
			<C.PokemonList>
				<PokemonCard pokemon={pokemon} />
			</C.PokemonList>
		)
	}

	return (
		<C.PokemonList>
			{pokemonList?.map(pkmon => (
				<PokemonCard key={pkmon.id} pokemon={pkmon} />
			))}
		</C.PokemonList>
	)
}

export default memo(Pokedex)
