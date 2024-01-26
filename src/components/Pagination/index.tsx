import Stack from '@mui/material/Stack'
import type React from 'react'
import type { Dispatch, SetStateAction } from 'react'

import { PaginationComponent } from './styles'

interface Props {
	count: number
	page: number
	setPage: Dispatch<SetStateAction<number>>
}

function Pagination({ count, page, setPage }: Props) {
	const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
		setPage(value)

		window.scrollTo({
			top: 0
		})
	}

	return (
		<Stack alignItems='center' justifyContent='center' spacing={2}>
			<PaginationComponent
				count={count}
				onChange={handleChange}
				page={page}
				size='large'
				showFirstButton
				showLastButton
			/>
		</Stack>
	)
}

export default Pagination
