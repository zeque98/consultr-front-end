import type { SyntheticEvent } from 'react'

import { pokemonTypes } from '../../pokemonTypes'
import * as C from './styles'

interface PokemonTypeProps {
	type: string
	tabIndex: boolean
	handleClick?: (e: SyntheticEvent) => void
}

export function PokemonType(props: PokemonTypeProps) {
	const { name, color } = pokemonTypes.find(item => item.name === props.type)

	const imgUrl = new URL(
		`/src/assets/pokemonTypes/${name}.svg`,
		import.meta.url
	).href

	return name && color ? (
		<C.Type
			color={color}
			onClick={props.handleClick}
			tabIndex={props.tabIndex ? 0 : -1}
			value={name}
		>
			<img alt={name} height={16} src={imgUrl} width={16} />
			{name}
		</C.Type>
	) : (
		<C.ErrorMessage>
			Ops, não foi possível encontrar o tipo desse pokémon.
		</C.ErrorMessage>
	)
}
