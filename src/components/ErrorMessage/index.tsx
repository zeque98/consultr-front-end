import imgSource from 'assets/img-pikachu-sad-min.png'

import * as C from './styles'

export function ErrorMessage() {
	return (
		<C.Container>
			<C.ErrorMessage>
				<img alt='Pikachu' height='32' src={imgSource} width='32' />
				<span>Ops, pokémon não encontrado!</span>
			</C.ErrorMessage>
		</C.Container>
	)
}
