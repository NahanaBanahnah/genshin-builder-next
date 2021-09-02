import Head from 'next/head'
import Nav from '../components/Nav/Nav'
import Build from '../components/Build/Build'
import Builds from '../data/builds'
import Character from '../data/characters'

const Home = () => {
	// GLOBAL STATE

	// BUILD ARRAYS
	const buildArray = Builds.map(ele => {
		ele.rarity = Character[ele.id].rarity
		ele.name = Character[ele.id].name
		return ele
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
			<main>
				<Nav />
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
			</main>
		</>
	)
}

export default Home
