import { memo, type MouseEventHandler } from 'react'

import { pokemonTypes } from 'utils/pokemonTypes'

import * as C from './styles'

interface Props {
	type: string
	handleClick?: MouseEventHandler<HTMLButtonElement>
}

function PokemonType({ type, handleClick }: Props) {
	const pokemonType = pokemonTypes.find(item => item.name === type)

	const imgUrl = new URL(
		`/src/assets/pokemonTypes/${pokemonType?.name}.svg`,
		import.meta.url
	).href

	return (
		<C.Type
			color={pokemonType?.color}
			onClick={handleClick}
			value={pokemonType?.name}
		>
			<img alt={pokemonType?.name} height={16} src={imgUrl} width={16} />
			{pokemonType?.name}
		</C.Type>
	)
}

export default memo(PokemonType)
