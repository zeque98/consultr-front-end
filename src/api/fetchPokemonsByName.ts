import axios from 'axios'

import { fetchPokemon } from './fetchPokemon'

export const fetchPokemonsByName = async (pokemonNames: string[]) => {
	const promises = pokemonNames.map(async pokemonName =>
		fetchPokemon(pokemonName)
	)

	return axios.all(promises)
}
