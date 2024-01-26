import { memo, type Dispatch, type SetStateAction } from 'react'

import AddIcon from 'assets/icon-add.svg'
import UpArrowIcon from 'assets/icon-arrow-up.svg'

import * as C from './styles'

interface Props {
	setPage: Dispatch<SetStateAction<number>>
	isLastPage: boolean
}

const handleUp = () => {
	window.scrollTo({
		top: 0
	})
}

function LoadMore({ setPage, isLastPage }: Props) {
	const onLoadMore = async () => {
		setPage(previousPage => previousPage + 1)
	}

	return (
		<C.ButtonContainer>
			{!isLastPage && (
				<button
					aria-label='show-more-pokemons'
					className='button'
					onClick={onLoadMore}
					type='button'
				>
					<AddIcon />
					Show more
				</button>
			)}

			<button
				aria-label='go-up'
				className='button'
				onClick={handleUp}
				type='button'
			>
				<UpArrowIcon />
			</button>
		</C.ButtonContainer>
	)
}

export default memo(LoadMore)
