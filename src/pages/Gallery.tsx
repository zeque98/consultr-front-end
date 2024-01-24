import { useQuery } from '@tanstack/react-query'
import { type ReactElement } from 'react'

import getFruits from 'api/getFruits'
import Fruit from 'components/Fruit'
import LoadingOrError from 'components/LoadingOrError'
import PokeAPI from './PokeApi'

const fetchPokemonList = async () => {
	const interval = {
		limit: 10,
		offset: 34
	}

	return PokeAPI.getPokemonsList(interval).then(response => {
		console.log(response)
		return response.results
	})
}

export default function GalleryPage(): ReactElement {
	const { isPending, isError, error, data } = useQuery({
		queryKey: ['fruits'],
		queryFn: getFruits
	})

	// useEffect(() => {
	// 	fetchPokemonList()
	// }, [])

	if (isPending || isError) {
		return <LoadingOrError error={error as Error} />
	}

	return (
		<>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					backgroundColor: 'coral'
				}}
			>
				<div
					style={{
						width: 75,
						height: 75,
						borderRadius: '50%',
						backgroundColor: 'gray'
					}}
				/>
				<div style={{ marginLeft: 18 }}>
					<h3>Kaiden Stormwood</h3>
					<p>Pokemon Trainer</p>
				</div>

				<div
					style={{
						display: 'flex',
						flex: 1,
						justifyContent: 'flex-end'
					}}
				>
					<div
						style={{
							width: 55,
							height: 55,
							borderRadius: '50%',
							backgroundColor: 'gray'
						}}
					/>
				</div>
			</div>

			<div>
				<h1 style={{ fontSize: 28 }}>Welcome to yor trainer dashboard!</h1>
			</div>

			<div style={{ backgroundColor: 'lightblue', display: 'flex' }}>
				<input
					id='name'
					maxLength={8}
					minLength={4}
					name='name'
					size={10}
					style={{ flex: 1 }}
					type='text'
					required
				/>
				<div style={{ height: 60, width: 60, backgroundColor: 'gray' }}>
					Search
				</div>
			</div>

			<div style={{ display: 'flex', overflow: 'auto' }}>
				<div style={{ width: 74, marginLeft: 12, backgroundColor: 'red' }}>
					option 1
				</div>
				<div style={{ width: 74, marginLeft: 12, backgroundColor: 'red' }}>
					option 1
				</div>
				<div style={{ width: 74, marginLeft: 12, backgroundColor: 'red' }}>
					option 1
				</div>
				<div style={{ width: 74, marginLeft: 12, backgroundColor: 'red' }}>
					option 1
				</div>
				<div style={{ width: 74, marginLeft: 12, backgroundColor: 'red' }}>
					option 1
				</div>
				<div style={{ width: 74, marginLeft: 12, backgroundColor: 'red' }}>
					option 1
				</div>
				<div style={{ width: 74, marginLeft: 12, backgroundColor: 'red' }}>
					option 1
				</div>
				<div style={{ width: 74, marginLeft: 12, backgroundColor: 'red' }}>
					option 1
				</div>
				<div style={{ width: 74, marginLeft: 12, backgroundColor: 'red' }}>
					option 1
				</div>
				<div style={{ width: 74, marginLeft: 12, backgroundColor: 'red' }}>
					option 1
				</div>
				<div style={{ width: 74, marginLeft: 12, backgroundColor: 'red' }}>
					option 1
				</div>
				<div style={{ width: 74, marginLeft: 12, backgroundColor: 'red' }}>
					option 1
				</div>
				<div style={{ width: 74, marginLeft: 12, backgroundColor: 'red' }}>
					option 1
				</div>
				<div style={{ width: 74, marginLeft: 12, backgroundColor: 'red' }}>
					option 1
				</div>
				<div style={{ width: 74, marginLeft: 12, backgroundColor: 'red' }}>
					option 1
				</div>
				<div style={{ width: 74, marginLeft: 12, backgroundColor: 'red' }}>
					option 1
				</div>
				<div style={{ width: 74, marginLeft: 12, backgroundColor: 'red' }}>
					option 1
				</div>
				<div style={{ width: 74, marginLeft: 12, backgroundColor: 'red' }}>
					option 1
				</div>
			</div>

			<div className='m-2 grid min-h-screen grid-cols-[minmax(0,384px)] place-content-center gap-2 md:m-0 md:grid-cols-[repeat(2,minmax(0,384px))] xl:grid-cols-[repeat(3,384px)]'>
				{data.map((fruit, index) => (
					<Fruit fruit={fruit} index={index} key={`FruitCard-${fruit.name}`} />
				))}
			</div>
		</>
	)
}
