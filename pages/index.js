import Head from 'next/head'

import Nav from '../components/Nav/Nav'
import Build from '../components/Build/Build'
import Builds from '../data/builds'
import Character from '../data/characters'

// REMOVE

const Home = () => {
	// BUILD ARRAYS
	const buildArray = Builds.map(ele => {
		const obj = { ...ele }
		obj.rarity = Character[ele.id].rarity
		obj.name = Character[ele.id].name
		return obj
	})

	buildArray.sort(
		(a, b) =>
			a.element.localeCompare(b.element) ||
			b.rarity - a.rarity ||
			a.id.localeCompare(b.id)
	)
	return (
		<>
			<Head>
				<title>Genshin Builder</title>
			</Head>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
			</Head>

			<main>
				<Nav />
				<section className="content">
					{/* <pre>{locals}</pre> */}
					{buildArray.map(character => (
						<Build
							key={`${character.id}-${character.build}`}
							name={character.name}
							element={character.element}
							id={character.id}
							weapon={character.weapon}
							artifactArray={character.artifact}
							sand={character.sand}
							glass={character.glass}
							crown={character.crown}
							subStats={character.sub}
							build={character.build}
						/>
					))}
				</section>
			</main>
		</>
	)
}

export default Home
