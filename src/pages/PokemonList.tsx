// PokemonList.js
import usePokemonList from './usePokemonList'

const PokemonList = () => {
	const { data, error, isLoading } = usePokemonList(1)

	if (isLoading) {
		return <div>Loading...</div>
	}

	if (error) {
		return <div>Error: {error.message}</div>
	}

	return (
		<div>
			<h2>Pokémon List</h2>
			<ul>
				{data.map(pokemon => (
					<li key={pokemon.name}>{pokemon.name}</li>
				))}
			</ul>
		</div>
	)
}

export default PokemonList
