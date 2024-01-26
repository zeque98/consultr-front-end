import axios from 'axios'

import type { Pokemon } from 'types/Pokemon'

export const fetchPokemon = async (pokemon: string) => {
	try {
		const response = await axios.get<Pokemon>(`/pokemon/${pokemon}`)

		return response.data
	} catch {
		throw new Error(`Failed to fetch Pokémon: ${pokemon}`)
	}
}
