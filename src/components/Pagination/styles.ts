import MUIPagination from '@mui/material/Pagination'
import styled from 'styled-components'

export const PaginationComponent = styled(MUIPagination)`
	.Mui-selected {
		background-color: #f9f9f95e !important;
	}

	.Mui-selected:hover {
		background-color: #f0f0f0;
		color: black;
	}

	.MuiPaginationItem-root {
		color: white;
	}
`
