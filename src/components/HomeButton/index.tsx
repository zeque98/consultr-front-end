import HomeIcon from 'assets/icon-home.svg?react'

import { fetchPokemonList } from 'api/fetchPokemonList'
import type { Pokemon } from 'types/Pokemon'

import * as C from './styles'

interface HomeButtonProps {
	setPokemonList: (data: Pokemon[]) => void
	setLoading: (value: boolean) => void
	setPage: (value: number) => void
	setShowPagination: (value: boolean) => void
	disabledButton: boolean
	setDisabledButton: (value: boolean) => void
}

export function HomeButton({
	setPokemonList,
	setLoading,
	setPage,
	setShowPagination,
	disabledButton,
	setDisabledButton
}: HomeButtonProps) {
	const handleClick = async () => {
		setLoading(true)
		setDisabledButton(true)
		setPokemonList(await fetchPokemonList(1))
		setLoading(false)
		setDisabledButton(false)
		setPage(1)
		setShowPagination(true)
	}

	return (
		<C.HomeButton
			className='button'
			disabled={!!disabledButton}
			onClick={handleClick}
		>
			<HomeIcon />
			Início
		</C.HomeButton>
	)
}
