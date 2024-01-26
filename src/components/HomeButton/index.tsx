import { memo } from 'react'

import HomeIcon from 'assets/icon-home.svg'

import * as C from './styles'

interface Props {
	handleReset: () => Promise<void>
}

function HomeButton({ handleReset }: Props) {
	return (
		<C.HomeButton className='button' onClick={handleReset}>
			<HomeIcon />
			Início
		</C.HomeButton>
	)
}

export default memo(HomeButton)
