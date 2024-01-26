import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

import { fetchPokemonByType } from 'api/fetchPokemonByType'

const useFetchPokemonsByType = (page: number) => {
	const [pokemonType, setPokemonType] = useState('')

	const { refetch, ...restData } = useQuery({
		queryKey: ['pokemonsByType', pokemonType, page],
		queryFn: async () => fetchPokemonByType(pokemonType),
		enabled: false,
		refetchOnWindowFocus: false,
		select: response => {
			if (page === 1) {
				return {
					totalPages: Math.floor(response.data.pokemon.length / 9),
					pokemonNames: response.data.pokemon
						.slice(0, 9)
						.map(({ pokemon }) => pokemon.name)
				}
			}

			return {
				totalPages: Math.floor(response.data.pokemon.length / 9),
				pokemonNames: response.data.pokemon
					.slice(page * 9, (page + 1) * 9)
					.map(({ pokemon }) => pokemon.name)
			}
		}
	})

	useEffect(() => {
		if (pokemonType) {
			void refetch()
		}
	}, [refetch, pokemonType, page])

	return {
		...restData,
		pokemonType,
		setPokemonType
	}
}

export default useFetchPokemonsByType
