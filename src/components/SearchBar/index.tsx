import { SearchField } from 'components/SearchField'
import { SearchFilter } from 'components/SearchFilter'
import type { Pokemon } from 'types/Pokemon'

import { HomeButton } from '../HomeButton'
import * as C from './styles'

interface SearchBarProps {
	setPokemonList: (data: Pokemon[]) => void
	pokemonAmount: number
	setPokemonAmount: (value: number) => void
	setError: (value: boolean) => void
	setLoading: (value: boolean) => void
	setPage: (value: number) => void
	setShowPagination: (value: boolean) => void
	disabledButton: boolean
	setDisabledButton: (value: boolean) => void
	searchBarRef: React.RefObject<HTMLDivElement>
}

export function SearchBar(props: SearchBarProps) {
	return (
		<div className='main-container' ref={props.searchBarRef}>
			<C.Container>
				<HomeButton
					disabledButton={props.disabledButton}
					setDisabledButton={props.setDisabledButton}
					setLoading={props.setLoading}
					setPage={props.setPage}
					setPokemonList={props.setPokemonList}
					setShowPagination={props.setShowPagination}
				/>
				<SearchFilter
					pokemonAmount={props.pokemonAmount}
					setDisabledButton={props.setDisabledButton}
					setLoading={props.setLoading}
					setPokemonAmount={props.setPokemonAmount}
					setPokemonList={props.setPokemonList}
					setShowPagination={props.setShowPagination}
				/>
				<SearchField
					setError={props.setError}
					setLoading={props.setLoading}
					setPokemonList={props.setPokemonList}
				/>
			</C.Container>
		</div>
	)
}
