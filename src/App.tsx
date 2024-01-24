import { useEffect, useRef, useState } from 'react'

import { Pokedex } from 'components/Pokedex'

import { fetchPokemonList } from './api/fetchPokemonList'
import { SearchBar } from './components/SearchBar'
import type { Pokemon } from './types/Pokemon'

function App() {
	const [pokemonList, setPokemonList] = useState<Pokemon[]>([])
	const [pokemonAmount, setPokemonAmount] = useState(9)
	const [error, setError] = useState(false)
	const [loading, setLoading] = useState(false)
	const [page, setPage] = useState(1)
	const [showPagination, setShowPagination] = useState(true)
	const [disabledButton, setDisabledButton] = useState(false)
	const searchBarReference = useRef<HTMLDivElement>(null)

	useEffect(() => {
		;(async () => {
			setLoading(true)
			setPokemonList(await fetchPokemonList(1))
			setLoading(false)
		})()
	}, [])

	useEffect(() => {
		setError(false)
	}, [pokemonList])

	return (
		<>
			<SearchBar
				disabledButton={disabledButton}
				pokemonAmount={pokemonAmount}
				searchBarRef={searchBarReference}
				setDisabledButton={setDisabledButton}
				setError={setError}
				setLoading={setLoading}
				setPage={setPage}
				setPokemonAmount={setPokemonAmount}
				setPokemonList={setPokemonList}
				setShowPagination={setShowPagination}
			/>
			<Pokedex
				disabledButton={disabledButton}
				error={error}
				loading={loading}
				page={page}
				pokemonAmount={pokemonAmount}
				pokemonList={pokemonList}
				searchBarRef={searchBarReference}
				setLoading={setLoading}
				setPage={setPage}
				setPokemonAmount={setPokemonAmount}
				setPokemonList={setPokemonList}
				setShowPagination={setShowPagination}
				showPagination={showPagination}
			/>
		</>
	)
}

export default App
