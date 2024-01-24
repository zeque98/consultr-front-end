import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const fetchPokemonList = async (page = 1) => {
	try {
		const response = await axios.get(
			`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${(page - 1) * 10}`
		)
		return response.data.results
	} catch (error) {
		throw new Error('Unable to fetch Pokémon list')
	}
}

const usePokemonList = (page: number) => {
	return useQuery({
		queryKey: ['pokemonList', page],
		queryFn: () => fetchPokemonList(page)
	})
}

export default usePokemonList
