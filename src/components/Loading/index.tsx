import * as C from './styles'

export function Loading() {
	return (
		<C.Container>
			<C.Loading>
				<div className='lds-roller'>
					<div />
					<div />
					<div />
					<div />
					<div />
					<div />
					<div />
					<div />
				</div>
			</C.Loading>
		</C.Container>
	)
}
