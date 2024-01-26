import axios from 'axios'

export interface PokemonByType {
	pokemon: {
		name: string
		url: string
	}
	slot: number
}

export interface FetchPokemonByTypeResponse {
	name: string
	pokemon: PokemonByType[]
}

export const fetchPokemonByType = async (type: string) =>
	axios.get<FetchPokemonByTypeResponse>(`/type/${type}`)
