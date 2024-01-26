import { useQuery } from '@tanstack/react-query'

import { fetchPokemonList } from 'api/fetchPokemonList'

const useFetchPokemonList = (page: number, enabled?: boolean) =>
	useQuery({
		queryKey: ['pokemonList', page],
		queryFn: async () => fetchPokemonList(page),
		enabled,
		refetchOnMount: enabled
	})

export default useFetchPokemonList
