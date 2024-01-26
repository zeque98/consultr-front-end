import { useState } from 'react'

import * as C from './styles'

interface Props {
	src: string
	alt: string
}

export function SkeletonLoading({ src, alt }: Props) {
	const [skeleton, setSkeleton] = useState(true)

	return (
		<C.Container $skeleton={skeleton}>
			{skeleton && <C.Skeleton />}
			<img
				alt={alt}
				height='256'
				onLoad={() => setSkeleton(false)}
				src={src}
				width='256'
			/>
		</C.Container>
	)
}
