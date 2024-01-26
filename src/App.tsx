import { useCallback, useMemo, useState } from 'react'

import HomeButton from 'components/HomeButton'
import LoadMore from 'components/LoadMore'
import Pagination from 'components/Pagination'
import Pokedex from 'components/Pokedex'
import SearchField from 'components/SearchField'
import SearchFilter from 'components/SearchFilter'
import useFetchPokemon from 'hooks/useFetchPokemon'
import useFetchPokemonsByType from 'hooks/useFetchPokemonByType'
import useFetchPokemonList from 'hooks/useFetchPokemonList'
import useFetchPokemonsByName from 'hooks/useFetchPokemonsByName'

import * as C from './styles'

function App() {
	const [page, setPage] = useState(1)

	const {
		data,
		isLoading: isPokemonListLoading,
		isRefetching,
		refetch: fetchPokemonList,
		isError: isPokemonListError
	} = useFetchPokemonList(page, true)

	const {
		data: pokemonsByType,
		pokemonType,
		setPokemonType
	} = useFetchPokemonsByType(page)

	const { isPokemonsByNameLoading, pokemonListByType, setPokemonListByType } =
		useFetchPokemonsByName(
			pokemonsByType?.pokemonNames ?? [],
			pokemonsByType?.totalPages
		)

	const {
		isPokemonFetchError,
		isPokemonFetchLoading,
		pokemon,
		pokemonName,
		setPokemonName
	} = useFetchPokemon()

	const handleReset = useCallback(async () => {
		setPokemonType('')
		setPage(1)
		setPokemonName('')

		setPokemonListByType([])

		await fetchPokemonList()
	}, [fetchPokemonList, setPokemonListByType, setPokemonName, setPokemonType])

	const pokemonList = useMemo(() => {
		if (pokemonType) {
			return {
				pokemons: pokemonListByType,
				totalPages: pokemonsByType?.totalPages ?? 1
			}
		}
		return {
			pokemons: data?.pokemonList ?? [],
			totalPages: data?.totalPages ?? 1
		}
	}, [data, pokemonListByType, pokemonsByType?.totalPages, pokemonType])

	const isLoading =
		isPokemonListLoading ||
		isRefetching ||
		isPokemonFetchLoading ||
		isPokemonsByNameLoading

	return (
		<div className='main-container'>
			<C.Container>
				<HomeButton handleReset={handleReset} />
				<SearchFilter
					setPage={setPage}
					setPokemonListByType={setPokemonListByType}
					setPokemonName={setPokemonName}
					setSelectedType={setPokemonType}
				/>
				<SearchField inputValue={pokemonName} setInputValue={setPokemonName} />
			</C.Container>

			<Pokedex
				error={isPokemonListError || isPokemonFetchError}
				isFilterByType={!!pokemonType}
				loading={isLoading}
				pokemon={pokemon}
				pokemonList={pokemonList.pokemons}
			/>

			{!pokemon && !isLoading && !pokemonType && !isPokemonFetchError && (
				<Pagination
					count={pokemonList.totalPages}
					page={page}
					setPage={setPage}
				/>
			)}

			{!pokemon &&
				pokemonList.pokemons.length > 0 &&
				pokemonType &&
				!isPokemonFetchError && (
					<LoadMore
						isLastPage={page === pokemonList.totalPages}
						setPage={setPage}
					/>
				)}
		</div>
	)
}

export default App
