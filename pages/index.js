import Head from 'next/head'
import Nav from '../components/Nav/Nav'
import Build from '../components/Build/Build'

import Builds from '../data/builds'

const Home = () => {
	// GLOBAL STATE

	// BUILD ARRAYS
	const buildArray = [...Builds]

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
