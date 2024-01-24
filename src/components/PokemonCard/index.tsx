import RulerIcon from '../../assets/icon-ruler.svg?react'
import WeightIcon from '../../assets/icon-weight.svg?react'
import { pokemonTypes } from '../../pokemonTypes'
import type { Pokemon } from '../../types/Pokemon'
import { PokemonType } from '../PokemonType'
import { SkeletonLoading } from '../helper/SkeletonLoading'
import * as C from './styles'

interface Props {
	pokemon: Pokemon
}

export function PokemonCard({ pokemon }: Props) {
	const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`

	const { color } = pokemonTypes.find(type =>
		pokemon.types[0].type.name.includes(type.name)
	)

	const formatPokemonId = (id: number) => {
		if (id < 10) return `#00${id}`
		if (id >= 10 && id < 99) return `#0${id}`
		return `#${id}`
	}

	return (
		<C.Container>
			<C.CardOverlay color={color} />
			<C.PokemonImg>
				<SkeletonLoading alt={pokemon.name} src={imgUrl} />
			</C.PokemonImg>
			<C.PokemonNumber>{formatPokemonId(pokemon.id)}</C.PokemonNumber>
			<C.PokemonName>{pokemon.name}</C.PokemonName>
			<C.PokemonType>
				{pokemon.types.map(({ type }) => (
					<PokemonType key={type.name} tabIndex={false} type={type.name} />
				))}
			</C.PokemonType>
			<C.PokemonFeatures>
				<C.PokemonWeight>
					<div>
						<WeightIcon />
						<span>{`${pokemon.weight / 10}`} kg</span>
					</div>
					<span>Peso</span>
				</C.PokemonWeight>
				<C.PokemonHeight>
					<div>
						<RulerIcon />
						<span>{`${pokemon.height / 10}`} m</span>
					</div>
					<span>Altura</span>
				</C.PokemonHeight>
			</C.PokemonFeatures>
		</C.Container>
	)
}
