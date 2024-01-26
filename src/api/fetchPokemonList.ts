import axios from 'axios'

import { fetchPokemon } from './fetchPokemon'

export interface PokemonResponse {
	count: number
	next: string
	previous: string
	results: {
		name: string
		url: string
	}[]
}

export const fetchPokemonList = async (page: number) => {
	const offset = 9 * (page - 1)
	const response = await axios.get<PokemonResponse>(
		`/pokemon?limit=9&offset=${offset}`
	)

	const promises = response.data.results.map(async pokemon =>
		fetchPokemon(pokemon.name)
	)

	return {
		totalPages: Math.floor(response.data.count / 9),
		pokemonList: await axios.all(promises)
	}
}
