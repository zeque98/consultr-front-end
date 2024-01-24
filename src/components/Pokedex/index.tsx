import AddIcon from '../../assets/icon-add.svg?react'
import UpArrowIcon from '../../assets/icon-arrow-up.svg?react'
import type { Pokemon } from '../../types/Pokemon'
// import UsePagination from '../Pagination'
import { PokemonCard } from '../PokemonCard'
import { ErrorMessage } from '../helper/ErrorMessage'
import { Loading } from '../helper/Loading'
import * as C from './styles'

interface PokedexProps {
	pokemonList: Pokemon[]
	setPokemonList: (data: Pokemon[]) => void
	pokemonAmount: number
	setPokemonAmount: (value: number) => void
	error: boolean
	loading: boolean
	setLoading: (value: boolean) => void
	page: number
	setPage: (value: number) => void
	showPagination: boolean
	setShowPagination: (value: boolean) => void
	disabledButton: boolean
	searchBarRef: React.RefObject<HTMLDivElement>
}

export function Pokedex(props: PokedexProps) {
	if (props.error) return <ErrorMessage />
	return (
		<C.Wrapper>
			<div className='main-container'>
				{props.loading ? (
					<Loading />
				) : (
					<C.PokemonList>
						{props.pokemonList.map(pokemon => (
							<PokemonCard key={pokemon.id} pokemon={pokemon} />
						))}
					</C.PokemonList>
				)}
				{/* {props.pokemonList.length > 1 &&
					!props.loading &&
					props.showPagination && (
						<UsePagination
							page={props.page}
							searchBarRef={props.searchBarRef}
							setLoading={props.setLoading}
							setPage={props.setPage}
							setPokemonList={props.setPokemonList}
						/>
					)} */}

				{props.pokemonList.length > 1 &&
					!props.loading &&
					!props.showPagination && (
						<C.ButtonContainer>
							{props.pokemonAmount < 54 && (
								<button
									className='button'
									disabled={!!props.disabledButton}
									onClick={() =>
										props.setPokemonAmount(props.pokemonAmount + 9)
									}
								>
									<AddIcon />
									Mostrar mais pokémons
								</button>
							)}

							<button
								className='button'
								onClick={() => {
									window.scrollTo({
										top: props.searchBarRef.current.offsetTop - 56
									})
								}}
							>
								<UpArrowIcon />
							</button>
						</C.ButtonContainer>
					)}
			</div>
		</C.Wrapper>
	)
}
