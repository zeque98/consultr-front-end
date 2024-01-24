import type { SyntheticEvent } from 'react'
import { useEffect, useState } from 'react'

import { fetchPokemonByType } from '../../api/fetchPokemonByType'
import { pokemonTypes } from '../../pokemonTypes'
import type { Pokemon } from '../../types/Pokemon'
import { PokemonType } from '../PokemonType'
import { Slide } from '../Slide'
import * as C from './styles'

interface SearchFilterProps {
	setPokemonList: (data: Pokemon[]) => void
	pokemonAmount: number
	setPokemonAmount: (value: number) => void
	setLoading: (value: boolean) => void
	setShowPagination: (value: boolean) => void
	setDisabledButton: (value: boolean) => void
}

export function SearchFilter(props: SearchFilterProps) {
	const [selectedType, setSelectedType] = useState('')

	const handleClick = async (e: SyntheticEvent) => {
		const typeName = (e.currentTarget as HTMLButtonElement).value
		setSelectedType(typeName)
		props.setPokemonAmount(9)
		props.setLoading(true)
		props.setPokemonList(await fetchPokemonByType(typeName))
		props.setLoading(false)
		props.setShowPagination(false)
	}

	useEffect(() => {
		if (selectedType) {
			;(async () => {
				props.setDisabledButton(true)
				props.setPokemonList(
					await fetchPokemonByType(selectedType, props.pokemonAmount)
				)
				props.setDisabledButton(false)
			})()
		}
	}, [props.pokemonAmount])

	return (
		<C.Container>
			<C.Title>Pesquisar por tipos</C.Title>
			<Slide>
				{pokemonTypes.map(({ name }) => (
					<PokemonType
						handleClick={handleClick}
						key={name}
						type={name}
						tabIndex
					/>
				))}
			</Slide>
		</C.Container>
	)
}
