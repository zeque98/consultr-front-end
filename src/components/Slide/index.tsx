import type { ReactNode, SyntheticEvent } from 'react'
import { useState } from 'react'
/// <reference types="vite-plugin-svgr/client" />

import LeftArrowIcon from '../../assets/icon-arrow-left.svg?react'
import RightArrowIcon from '../../assets/icon-arrow-right.svg?react'
import { useMedia } from '../../hooks/useMedia'
import * as C from './styles'

interface SlideProps {
	children: ReactNode
}

export function Slide({ children }: SlideProps) {
	const [slidePosition, setSlidePosition] = useState(0)
	const mobile = useMedia('(max-width: 31.25rem)')

	const slideNavigation = ({ currentTarget }: SyntheticEvent) => {
		const direction = (currentTarget as HTMLButtonElement).value

		direction === 'next'
			? setSlidePosition(slidePosition <= -87.5 ? -87.5 : slidePosition - 12.5)
			: setSlidePosition(slidePosition === 0 ? 0 : slidePosition + 12.5)
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
				<C.SlideContent slidePosition={slidePosition}>
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
