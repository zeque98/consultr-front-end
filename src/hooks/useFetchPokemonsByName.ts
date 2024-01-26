import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

import { fetchPokemonsByName } from 'api/fetchPokemonsByName'
import type { Pokemon } from 'types/Pokemon'

const useFetchPokemonsByName = (pokemonNames?: string[], totalPages = 0) => {
	const [pokemonListByType, setPokemonListByType] = useState<Pokemon[]>([])

	const {
		data: pokemonList,
		isLoading,
		refetch
	} = useQuery({
		queryKey: ['pokemonsByName', pokemonNames],
		queryFn: async () => fetchPokemonsByName(pokemonNames as string[]),
		enabled: false,
		refetchOnWindowFocus: false
	})

	useEffect(() => {
		if (pokemonNames) {
			void refetch()
		}
	}, [refetch, pokemonNames])

	useEffect(() => {
		if (pokemonList) {
			setPokemonListByType(previousPokemonListByType => [
				...previousPokemonListByType,
				...pokemonList
			])
		}
	}, [pokemonList])

	return {
		isPokemonsByNameLoading: isLoading,
		pokemonListByType,
		setPokemonListByType,
		totalPages
	}
}

export default useFetchPokemonsByName
