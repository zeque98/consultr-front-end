import type { ReactNode, SyntheticEvent } from 'react'
import { useState } from 'react'

import LeftArrowIcon from 'assets/icon-arrow-left.svg'
import RightArrowIcon from 'assets/icon-arrow-right.svg'
import useMedia from 'hooks/useMedia'

import * as C from './styles'

interface Props {
	children: ReactNode
}

function Slide({ children }: Props) {
	const [slidePosition, setSlidePosition] = useState(0)
	const mobile = useMedia('(max-width: 31.25rem)')

	const slideNavigation = ({
		currentTarget
	}: SyntheticEvent<HTMLButtonElement>) => {
		const direction = currentTarget.value

		if (direction === 'next') {
			setSlidePosition(slidePosition <= -87.5 ? -87.5 : slidePosition - 12.5)
		} else setSlidePosition(slidePosition === 0 ? 0 : slidePosition + 12.5)
	}

	return (
		<C.SlideContainer>
			{!mobile && (
				<C.SlideButton
					disabled={slidePosition === 0 && true}
					onClick={slideNavigation}
					value='prev'
				>
					<LeftArrowIcon />
				</C.SlideButton>
			)}
			<C.Slide>
				<C.SlideContent $slidePosition={slidePosition}>
					{children}
				</C.SlideContent>
			</C.Slide>
			{!mobile && (
				<C.SlideButton
					disabled={slidePosition === -87.5 && true}
					onClick={slideNavigation}
					value='next'
				>
					<RightArrowIcon />
				</C.SlideButton>
			)}
		</C.SlideContainer>
	)
}

export default Slide
