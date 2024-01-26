import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

import { fetchPokemon } from 'api/fetchPokemon'

import useDebounce from './useDebounce'

const useFetchPokemon = () => {
	const [pokemonName, setPokemonName] = useState('')
	const debouncedSearch = useDebounce(pokemonName, 400)

	const {
		data: pokemon,
		isRefetching,
		isLoading,
		isRefetchError,
		isError
	} = useQuery({
		queryKey: ['pokemonByName', debouncedSearch],
		queryFn: async () => fetchPokemon(debouncedSearch),
		enabled: !!debouncedSearch,
		refetchOnWindowFocus: false
	})

	return {
		isPokemonFetchError: isError || isRefetchError,
		isPokemonFetchLoading: isRefetching || isLoading,
		pokemon,
		pokemonName,
		setPokemonName
	}
}

export default useFetchPokemon
